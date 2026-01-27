import { useState, useEffect, useCallback } from 'react';
import { Item, getItemById, WeaponLevel, getWeaponValueAtLevel } from '@/data/items';

export interface StashItem {
  itemId: string;
  quantity: number;
  item: Item;
  weaponLevel?: WeaponLevel; // Only for weapons
}

export interface StashBackup {
  id: string;
  timestamp: number;
  items: StashItem[];
  name: string;
}

const STASH_KEY = 'arcraiders_stash';
const BACKUPS_KEY = 'arcraiders_stash_backups';

// Helper to calculate effective value considering weapon level
export const getEffectiveValue = (stashItem: StashItem): number => {
  if (stashItem.item.type === 'Weapons' && stashItem.weaponLevel) {
    return getWeaponValueAtLevel(stashItem.item.value, stashItem.weaponLevel);
  }
  return stashItem.item.value;
};

export function useStash() {
  const [stashItems, setStashItems] = useState<StashItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STASH_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const validItems = parsed.filter((s: any) => getItemById(s.itemId));
        setStashItems(validItems.map((s: any) => ({
          ...s,
          item: getItemById(s.itemId)!
        })));
      } catch (e) {
        console.error('Failed to load stash:', e);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    const toSave = stashItems.map(({ itemId, quantity, weaponLevel }) => ({ 
      itemId, 
      quantity,
      ...(weaponLevel && { weaponLevel })
    }));
    localStorage.setItem(STASH_KEY, JSON.stringify(toSave));
  }, [stashItems]);

  const addItem = useCallback((itemId: string, quantity: number = 1, weaponLevel?: WeaponLevel) => {
    const item = getItemById(itemId);
    if (!item) return;

    setStashItems(prev => {
      // For weapons, we need to check both itemId AND level
      const existing = prev.find(s => 
        s.itemId === itemId && 
        (item.type !== 'Weapons' || s.weaponLevel === weaponLevel)
      );
      
      if (existing) {
        return prev.map(s => 
          s.itemId === itemId && (item.type !== 'Weapons' || s.weaponLevel === weaponLevel)
            ? { ...s, quantity: s.quantity + quantity }
            : s
        );
      }
      
      return [...prev, { 
        itemId, 
        quantity, 
        item,
        ...(item.type === 'Weapons' && { weaponLevel: weaponLevel || 1 })
      }];
    });
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number, weaponLevel?: WeaponLevel) => {
    if (quantity <= 0) {
      removeItem(itemId, weaponLevel);
      return;
    }
    setStashItems(prev => 
      prev.map(s => {
        if (s.itemId === itemId) {
          // For weapons, also check level
          if (s.item.type === 'Weapons' && s.weaponLevel !== weaponLevel) {
            return s;
          }
          return { ...s, quantity };
        }
        return s;
      })
    );
  }, []);

  const removeItem = useCallback((itemId: string, weaponLevel?: WeaponLevel) => {
    setStashItems(prev => prev.filter(s => {
      if (s.itemId !== itemId) return true;
      // For weapons, also check level
      if (s.item.type === 'Weapons' && s.weaponLevel !== weaponLevel) return true;
      return false;
    }));
  }, []);

  const clearAll = useCallback(() => {
    setStashItems([]);
  }, []);

  const saveBackup = useCallback((name?: string) => {
    const backups = getBackups();
    const newBackup: StashBackup = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      items: stashItems,
      name: name || `Backup ${new Date().toLocaleString()}`
    };
    backups.unshift(newBackup);
    // Keep only last 10 backups
    localStorage.setItem(BACKUPS_KEY, JSON.stringify(backups.slice(0, 10)));
    return newBackup;
  }, [stashItems]);

  const getBackups = useCallback((): StashBackup[] => {
    try {
      const saved = localStorage.getItem(BACKUPS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }, []);

  const loadBackup = useCallback((backupId: string) => {
    const backups = getBackups();
    const backup = backups.find(b => b.id === backupId);
    if (backup) {
      const validItems = backup.items.filter(s => getItemById(s.itemId));
      setStashItems(validItems.map(s => ({
        ...s,
        item: getItemById(s.itemId)!
      })));
    }
  }, [getBackups]);

  const exportAsText = useCallback(() => {
    const lines = stashItems.map(s => {
      const effectiveValue = getEffectiveValue(s);
      const levelText = s.weaponLevel ? ` (Lvl ${s.weaponLevel})` : '';
      return `${s.item.name}${levelText} x${s.quantity} - ${effectiveValue * s.quantity} coins (${s.item.weight * s.quantity}kg)`;
    });
    const total = stashItems.reduce((sum, s) => sum + getEffectiveValue(s) * s.quantity, 0);
    const weight = stashItems.reduce((sum, s) => sum + s.item.weight * s.quantity, 0);
    
    return `=== Arc Raiders Stash ===\n${lines.join('\n')}\n\nTotal: ${total.toLocaleString()} coins\nWeight: ${weight.toFixed(1)}kg\nRatio: ${(total / weight).toFixed(2)} coins/kg`;
  }, [stashItems]);

  const exportToFile = useCallback(() => {
    const data = stashItems.map(({ itemId, quantity, weaponLevel }) => ({ 
      itemId, 
      quantity,
      ...(weaponLevel && { weaponLevel })
    }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `arc-raiders-stash-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [stashItems]);

  const importFromFile = useCallback((file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (Array.isArray(data)) {
            const validItems = data.filter((s: any) => s.itemId && typeof s.quantity === 'number' && getItemById(s.itemId));
            setStashItems(validItems.map((s: any) => ({
              itemId: s.itemId,
              quantity: s.quantity,
              weaponLevel: s.weaponLevel,
              item: getItemById(s.itemId)!
            })));
            resolve(true);
          } else {
            resolve(false);
          }
        } catch {
          resolve(false);
        }
      };
      reader.onerror = () => resolve(false);
      reader.readAsText(file);
    });
  }, []);

  // Calculations - using effective value for weapons
  const totalValue = stashItems.reduce((sum, s) => sum + getEffectiveValue(s) * s.quantity, 0);
  const totalWeight = stashItems.reduce((sum, s) => sum + s.item.weight * s.quantity, 0);
  const valuePerWeight = totalWeight > 0 ? totalValue / totalWeight : 0;
  const recycleValue = Math.floor(totalValue * 0.5);
  const uniqueItems = stashItems.length;

  const valueByType = stashItems.reduce((acc, s) => {
    acc[s.item.type] = (acc[s.item.type] || 0) + getEffectiveValue(s) * s.quantity;
    return acc;
  }, {} as Record<string, number>);

  return {
    stashItems,
    addItem,
    updateQuantity,
    removeItem,
    clearAll,
    saveBackup,
    getBackups,
    loadBackup,
    exportAsText,
    exportToFile,
    importFromFile,
    totalValue,
    totalWeight,
    valuePerWeight,
    recycleValue,
    uniqueItems,
    valueByType,
  };
}
