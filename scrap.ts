// scrape-arcraiders-complete.ts
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

interface WeaponRow {
    name: string;
    pageUrl: string;
    imageUrl: string;
    imageFileName: string;
    ammo: string;
    weaponType: string;
    rarity: string;
    weight: number;
    damage: string;
    fireRate: string;
    headshotMultiplier: string;
    range: string;
    stability: string;
    agility: string;
    stealth: string;
    arcArmorPen: string;
    specialTrait: string;
    magazineSize: string;
    firingMode: string;
}

const BASE_URL = 'https://arcraiders.wiki';

const scrapeAllWeaponTables = async (page: puppeteer.Page): Promise<WeaponRow[]> => {
    await page.goto(`${BASE_URL}/wiki/Weapons`, { waitUntil: 'networkidle2' });
    await page.waitForSelector('table.wikitable.sortable');

    const list = await page.evaluate(() => {
        const result: any[] = [];

        // Récupérer TOUS les tableaux wikitable sortable
        const tables = document.querySelectorAll('table.wikitable.sortable.jquery-tablesorter');

        tables.forEach((table) => {
            const rows = Array.from(table.querySelectorAll('tbody tr'));

            rows.forEach((row) => {
                const firstTd = row.querySelector('td');
                if (!firstTd) return;

                const ilinkSpan = firstTd.querySelector('span.template-ilink');
                if (!ilinkSpan) return;

                const weaponLink =
                    ilinkSpan.querySelector('a[title]') ||
                    firstTd.querySelector('a[title]');

                if (!weaponLink) return;

                const href = weaponLink.getAttribute('href');
                const name =
                    weaponLink.getAttribute('title') ||
                    weaponLink.textContent?.trim() ||
                    '';
                if (!href || !name) return;

                const pageUrl = href.startsWith('http')
                    ? href
                    : `https://arcraiders.wiki${href}`;

                const img = ilinkSpan.querySelector('picture img') as HTMLImageElement | null;
                const rawImgSrc = img?.getAttribute('src') || '';
                const imageUrl = rawImgSrc
                    ? rawImgSrc.startsWith('http')
                        ? rawImgSrc
                        : `https://arcraiders.wiki${rawImgSrc}`
                    : '';
                const imageFileName = imageUrl
                    ? imageUrl.split('/').pop()!.split('?')[0]
                    : '';

                result.push({
                    name,
                    pageUrl,
                    imageUrl,
                    imageFileName,
                });
            });
        });

        return result;
    });

    return list;
};

const scrapeWeaponPage = async (
    page: puppeteer.Page,
    weapon: WeaponRow
): Promise<WeaponRow> => {
    await page.goto(weapon.pageUrl, { waitUntil: 'networkidle2' });
    await page.waitForSelector('table.infobox.floatright', { timeout: 10000 });

    const details = await page.evaluate(() => {
        const infobox = document.querySelector(
            'table.infobox.floatright'
        ) as HTMLTableElement | null;
        if (!infobox) throw new Error('infobox not found');

        const data: any = {
            ammo: '',
            weaponType: '',
            rarity: '',
            weight: 0,
            damage: '',
            fireRate: '',
            headshotMultiplier: '',
            range: '',
            stability: '',
            agility: '',
            stealth: '',
            arcArmorPen: '',
            specialTrait: '',
            magazineSize: '',
            firingMode: '',
        };

        // 1) lignes data-tag (ammo, type, rarity)
        const tagRows = infobox.querySelectorAll('tr.data-tag');
        if (tagRows.length >= 1) {
            const ammoRow = tagRows[0];
            const ammoTd = ammoRow.querySelector('td');
            const ammoText = ammoTd?.textContent?.trim() || '';
            data.ammo = ammoText.replace(/\s+/g, ' ');
        }
        if (tagRows.length >= 2) {
            const typeRow = tagRows[1];
            const typeText = typeRow.querySelector('a')?.textContent?.trim() || '';
            data.weaponType = typeText;
        }
        if (tagRows.length >= 3) {
            const rarityRow = tagRows[2];
            const rarityText =
                rarityRow.querySelector('a')?.textContent?.trim() || '';
            data.rarity = rarityText.replace('Weapons', '').trim();
        }

        // 2) poids via div.template-weight
        const weightDiv = document.querySelector('div.template-weight');
        const weightSpan = weightDiv?.querySelector('span:last-of-type');
        const weightRaw = weightSpan?.textContent?.trim() || '0';
        data.weight = parseFloat(weightRaw);

        // 3) stats (lignes th/td)
        const statRows = infobox.querySelectorAll('tr.infobox-data');
        statRows.forEach((row) => {
            const th = row.querySelector('th');
            const td = row.querySelector('td');
            if (!th || !td) return;

            const label = th.textContent?.trim() || '';
            let value = td.textContent?.trim() || '';
            value = value.replace(/\s+/g, ' ');

            switch (label) {
                case 'Ammo':
                    data.ammo = value;
                    break;
                case 'Magazine Size':
                    data.magazineSize = value;
                    break;
                case 'Firing Mode':
                    data.firingMode = value;
                    break;
                case 'ARC Armor Penetration':
                    data.arcArmorPen = value;
                    break;
                case 'Special Trait':
                    data.specialTrait = value;
                    break;
                case 'Damage':
                    data.damage = value;
                    break;
                case 'Fire Rate':
                    data.fireRate = value;
                    break;
                case 'Headshot Multiplier':
                    data.headshotMultiplier = value;
                    break;
                case 'Range':
                    data.range = value;
                    break;
                case 'Stability':
                    data.stability = value;
                    break;
                case 'Agility':
                    data.agility = value;
                    break;
                case 'Stealth':
                    data.stealth = value;
                    break;
                default:
                    break;
            }
        });

        return data;
    });

    return {
        ...weapon,
        ...details,
    };
};

const toCsv = (rows: WeaponRow[]): string => {
    const headers = [
        'Name',
        'PageUrl',
        'ImageUrl',
        'ImageFileName',
        'Ammo',
        'WeaponType',
        'Rarity',
        'Weight',
        'Damage',
        'FireRate',
        'HeadshotMultiplier',
        'Range',
        'Stability',
        'Agility',
        'Stealth',
        'ARCArmorPen',
        'SpecialTrait',
        'MagazineSize',
        'FiringMode',
    ];

    const escape = (v: string | number) => {
        if (v === null || v === undefined) return '';
        const s = String(v);
        if (s.includes('"') || s.includes(',') || s.includes('\n')) {
            return `"${s.replace(/"/g, '""')}"`;
        }
        return s;
    };

    const lines = [
        headers.join(','),
        ...rows.map((r) =>
            [
                r.name,
                r.pageUrl,
                r.imageUrl,
                r.imageFileName,
                r.ammo,
                r.weaponType,
                r.rarity,
                r.weight,
                r.damage,
                r.fireRate,
                r.headshotMultiplier,
                r.range,
                r.stability,
                r.agility,
                r.stealth,
                r.arcArmorPen,
                r.specialTrait,
                r.magazineSize,
                r.firingMode,
            ]
                .map(escape)
                .join(',')
        ),
    ];

    return lines.join('\n');
};

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 }
    });
    const page = await browser.newPage();

    console.log('📄 Récupération de la liste des armes depuis tous les tableaux...');
    const list = await scrapeAllWeaponTables(page);
    console.log(`✅ ${list.length} armes trouvées\n`);

    const results: WeaponRow[] = [];

    for (let i = 0; i < list.length; i++) {
        const base = list[i];
        console.log(`[${i + 1}/${list.length}] ${base.name}`);
        console.log(`  🔗 ${base.pageUrl}`);

        try {
            const full = await scrapeWeaponPage(page, base);
            results.push(full);
            console.log(`  ✅ Poids: ${full.weight} kg | Dégâts: ${full.damage} | Cadence: ${full.fireRate}`);
        } catch (e: any) {
            console.error(`  ❌ Erreur: ${e.message || e}`);
        }

        // Délai entre chaque requête
        await new Promise((res) => setTimeout(res, 1500));
    }

    await browser.close();

    const csv = toCsv(results);
    const outPath = path.resolve('weapons_arcraiders.csv');
    fs.writeFileSync(outPath, csv, 'utf8');

    console.log(`\n✅ ${results.length} armes sauvegardées dans: ${outPath}`);
})();
