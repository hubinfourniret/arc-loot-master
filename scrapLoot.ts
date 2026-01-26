// scrape-all-items-complete.ts
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

interface ItemData {
    id: string;
    name: string;
    type: string;
    category: string;
    rarity: string;
    weight: number;
    stackSize: number;
    value: number;
    canBeFoundIn: string[];
    imageUrl: string;
    pageUrl: string;
    description: string;
}

const BASE_URL = 'https://arcraiders.wiki';

const categoryTypeMap: Record<string, string> = {
    'Quick Use': 'Consumables',
    'Nature': 'Crafting Materials',
    'Basic Material': 'Crafting Materials',
    'Topside Material': 'Crafting Materials',
    'Refined Material': 'Crafting Materials',
    'Recyclable': 'Crafting Materials',
    'Trinket': 'Gear',
    'Key': 'Gear',
    'Mods': 'Gear',
    'Augment': 'Gear',
    'Shield': 'Gear',
    'Ammunition': 'Ammo',
    'Misc': 'Consumables',
};

const rarityMap: Record<string, string> = {
    'Common': 'Common',
    'Uncommon': 'Uncommon',
    'Rare': 'Rare',
    'Epic': 'Epic',
    'Legendary': 'Legendary'
};

const scrapeItemsList = async (page: puppeteer.Page) => {
    await page.goto(`${BASE_URL}/wiki/Loot`, { waitUntil: 'networkidle2' });
    await page.waitForSelector('table.wikitable.noMerge.sortable');

    return await page.evaluate(() => {
        const results: any[] = [];
        const tables = document.querySelectorAll('table.wikitable.noMerge.sortable.jquery-tablesorter');

        tables.forEach((table) => {
            const rows = Array.from(table.querySelectorAll('tbody tr'));

            rows.forEach((row) => {
                const itemTd = row.querySelector('td.field_Item');
                const categoryTd = row.querySelector('td.field_Category');

                if (!itemTd || !categoryTd) return;

                const link = itemTd.querySelector('a');
                if (!link) return;

                const href = link.getAttribute('href');
                const name = link.getAttribute('title') || link.textContent?.trim() || '';
                const category = categoryTd.textContent?.trim() || 'Unknown';

                if (!href || !name) return;

                results.push({
                    name,
                    pageUrl: href.startsWith('http') ? href : `https://arcraiders.wiki${href}`,
                    category
                });
            });
        });

        return results;
    });
};

const scrapeItemPage = async (page: puppeteer.Page, item: any): Promise<ItemData> => {
    await page.goto(item.pageUrl, { waitUntil: 'networkidle2' });
    await page.waitForSelector('table.infobox.floatright', { timeout: 10000 });

    const data = await page.evaluate(() => {
        const infobox = document.querySelector('table.infobox.floatright');
        if (!infobox) throw new Error('Infobox not found');

        const result: any = {
            rarity: 'Common',
            weight: 0.5,
            stackSize: 1,
            value: 0,
            canBeFoundIn: [],
            imageUrl: '',
            description: ''
        };

        // 1. Image (premier tr avec class infobox-image)
        const imageRow = infobox.querySelector('tr.infobox-image');
        if (imageRow) {
            const img = imageRow.querySelector('picture img') as HTMLImageElement;
            if (img) {
                let src = img.getAttribute('src') || '';
                // Prendre la version haute résolution si disponible
                const srcset = img.getAttribute('srcset');
                if (srcset) {
                    // Extraire la meilleure qualité (2x)
                    const srcsetMatch = srcset.match(/([^\s,]+)\s+2x/);
                    if (srcsetMatch) {
                        src = srcsetMatch[1];
                    }
                }
                result.imageUrl = src.startsWith('http') ? src : `https://arcraiders.wiki${src}`;
            }
        }

        // 2. Rarity (chercher tr avec class data-tag)
        const rarityRow = infobox.querySelector('tr.data-tag');
        if (rarityRow) {
            const rarityText = rarityRow.textContent?.trim() || 'Common';
            result.rarity = rarityText;
        }

        // 3. Parcourir toutes les lignes avec <th scope="row">
        const dataRows = infobox.querySelectorAll('tr');

        dataRows.forEach((row) => {
            const th = row.querySelector('th[scope="row"]');
            const td = row.querySelector('td');

            if (!th || !td) return;

            const label = th.textContent?.trim() || '';
            const value = td.textContent?.trim() || '';

            switch (label) {
                case 'Can Be Found In':
                    const locations = Array.from(td.querySelectorAll('li')).map(li =>
                        li.textContent?.trim().replace(/\s+/g, ' ') || ''
                    );
                    result.canBeFoundIn = locations;
                    break;

                case 'Weight':
                    const weightMatch = value.match(/[\d.]+/);
                    if (weightMatch) {
                        result.weight = parseFloat(weightMatch[0]);
                    }
                    break;

                case 'Stack Size':
                    const stackMatch = value.match(/\d+/);
                    if (stackMatch) {
                        result.stackSize = parseInt(stackMatch[0]);
                    }
                    break;

                case 'Sell Price':
                    const priceMatch = value.replace(/,/g, '').match(/\d+/);
                    if (priceMatch) {
                        result.value = parseInt(priceMatch[0]);
                    }
                    break;
            }
        });

        // Description (premier paragraphe)
        const firstP = document.querySelector('p');
        if (firstP) {
            result.description = firstP.textContent?.trim().substring(0, 150) || '';
        }

        return result;
    });

    const itemId = `item_${item.name.toLowerCase()
        .replace(/[^a-z0-9]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '')}`;

    const itemType = categoryTypeMap[item.category] || 'Consumables';
    const rarity = rarityMap[data.rarity] || 'Common';

    return {
        id: itemId,
        name: item.name,
        type: itemType,
        category: item.category,
        rarity,
        weight: data.weight,
        stackSize: data.stackSize,
        value: data.value,
        canBeFoundIn: data.canBeFoundIn,
        imageUrl: data.imageUrl,
        pageUrl: item.pageUrl,
        description: data.description
    };
};

const generateTypeScript = (items: ItemData[]): string => {
    const itemsByType: Record<string, ItemData[]> = {
        'Consumables': [],
        'Crafting Materials': [],
        'Gear': [],
        'Ammo': []
    };

    items.forEach(item => {
        if (itemsByType[item.type]) {
            itemsByType[item.type].push(item);
        }
    });

    let output = '';
    output += '// ============================================================================\n';
    output += '// ITEMS DATA - Scrapé depuis ARC Raiders Wiki\n';
    output += '// ============================================================================\n\n';

    Object.entries(itemsByType).forEach(([type, typeItems]) => {
        if (typeItems.length === 0) return;

        const varName = type.toLowerCase().replace(/ /g, '_');
        output += `// ${type.toUpperCase()} (${typeItems.length} items)\n`;
        output += `export const ${varName}: BaseItem[] = [\n`;

        typeItems.forEach((item, idx) => {
            const comma = idx < typeItems.length - 1 ? ',' : '';

            output += '  {\n';
            output += `    id: "${item.id}",\n`;
            output += `    name: "${item.name.replace(/"/g, '\\"')}",\n`;
            output += `    type: "${item.type}",\n`;
            output += `    rarity: "${item.rarity}",\n`;
            output += `    value: ${item.value},\n`;
            output += `    weight: ${item.weight},\n`;
            output += `    imageUrl: "${item.imageUrl}",\n`;  // ← IMAGE URL AJOUTÉE ICI
            output += `    description: "${item.description.replace(/"/g, '\\"').replace(/\n/g, ' ')}"\n`;
            output += `  }${comma}\n`;
        });

        output += '];\n\n';
    });

    return output;
};

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();

    console.log('📄 Récupération de la liste des items...');
    const itemsList = await scrapeItemsList(page);
    console.log(`✅ ${itemsList.length} items trouvés\n`);

    const allItems: ItemData[] = [];

    for (let i = 0; i < itemsList.length; i++) {
        const item = itemsList[i];
        console.log(`[${i + 1}/${itemsList.length}] ${item.name} (${item.category})`);

        try {
            const fullData = await scrapeItemPage(page, item);
            allItems.push(fullData);
            console.log(`  ✅ ${fullData.rarity} | ${fullData.weight}kg | ${fullData.value}¢`);
            if (fullData.imageUrl) {
                console.log(`  🖼️  Image: ${fullData.imageUrl.substring(0, 60)}...`);
            }
        } catch (e: any) {
            console.error(`  ❌ Erreur: ${e.message}`);
        }

        await new Promise(res => setTimeout(res, 1500));
    }

    await browser.close();

    const tsCode = generateTypeScript(allItems);
    const outputPath = path.resolve('all_items_data.ts');
    fs.writeFileSync(outputPath, tsCode, 'utf8');

    console.log(`\n✅ Fichier TypeScript généré: ${outputPath}`);
    console.log(`📊 Total: ${allItems.length} items`);

    const byType: Record<string, number> = {};
    allItems.forEach(item => {
        byType[item.type] = (byType[item.type] || 0) + 1;
    });

    console.log('\n📊 Répartition par type:');
    Object.entries(byType).forEach(([type, count]) => {
        console.log(`  - ${type}: ${count} items`);
    });
})();
