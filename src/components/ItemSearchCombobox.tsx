import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Check, Plus, Search } from 'lucide-react';
import { allItems, BaseItem } from '@/data/items';
import { ItemImage } from '@/components/ItemImage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface ItemSearchComboboxProps {
  onAddItem: (itemId: string, quantity: number) => void;
}

export function ItemSearchCombobox({ onAddItem }: ItemSearchComboboxProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return allItems.slice(0, 50);
    
    const term = searchTerm.toLowerCase();
    return allItems.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.type.toLowerCase().includes(term) ||
      item.rarity.toLowerCase().includes(term)
    ).slice(0, 50);
  }, [searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, filteredItems.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleQuickAdd(filteredItems[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  const handleQuickAdd = (item: BaseItem) => {
    const qty = quantities[item.id] || 1;
    onAddItem(item.id, qty);
    // Reset quantity after adding
    setQuantities(prev => ({ ...prev, [item.id]: 1 }));
  };

  const updateQuantity = (itemId: string, value: number) => {
    setQuantities(prev => ({ ...prev, [itemId]: Math.max(1, value) }));
  };

  const getRarityStyles = (rarity: string) => {
    switch (rarity) {
      case 'Legendary':
        return 'border-yellow-500/30 bg-yellow-500/5';
      case 'Epic':
        return 'border-purple-500/30 bg-purple-500/5';
      case 'Rare':
        return 'border-primary/30 bg-primary/5';
      case 'Uncommon':
        return 'border-green-500/30 bg-green-500/5';
      default:
        return 'border-border bg-muted/30';
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          placeholder="Search items by name, type, or rarity..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="pl-10 bg-muted border-border h-12 text-base"
        />
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-popover border border-border rounded-lg shadow-xl overflow-hidden">
          <ScrollArea className="max-h-[400px]">
            {filteredItems.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground">
                <p>No items found for "{searchTerm}"</p>
              </div>
            ) : (
              <div className="p-2 space-y-1">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={cn(
                      "flex items-center gap-3 p-2 rounded-lg border transition-all cursor-pointer",
                      getRarityStyles(item.rarity),
                      index === selectedIndex && "ring-2 ring-primary",
                      "hover:bg-accent/50"
                    )}
                    onClick={() => setSelectedIndex(index)}
                  >
                    {/* Item Image */}
                    <ItemImage
                      src={item.imageUrl}
                      alt={item.name}
                      size="md"
                      rarity={item.rarity}
                    />

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground truncate">
                          {item.name}
                        </span>
                        <span className={cn(
                          "text-xs px-1.5 py-0.5 rounded shrink-0",
                          item.rarity === 'Legendary' && 'bg-yellow-500/20 text-yellow-400',
                          item.rarity === 'Epic' && 'bg-purple-500/20 text-purple-400',
                          item.rarity === 'Rare' && 'bg-primary/20 text-primary',
                          item.rarity === 'Uncommon' && 'bg-green-500/20 text-green-400',
                          item.rarity === 'Common' && 'bg-muted-foreground/20 text-muted-foreground'
                        )}>
                          {item.rarity}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{item.type}</span>
                        <span className="text-primary font-mono">{item.value}c</span>
                        <span className="font-mono">{item.weight}kg</span>
                      </div>
                    </div>

                    {/* Quantity & Add */}
                    <div className="flex items-center gap-2 shrink-0">
                      <Input
                        type="number"
                        min={1}
                        value={quantities[item.id] || 1}
                        onChange={(e) => {
                          e.stopPropagation();
                          updateQuantity(item.id, parseInt(e.target.value) || 1);
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-16 h-8 text-center bg-background border-border"
                      />
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickAdd(item);
                        }}
                        className="h-8 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          {/* Keyboard hints */}
          <div className="border-t border-border px-3 py-2 bg-muted/50 flex items-center gap-4 text-xs text-muted-foreground">
            <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-foreground">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-foreground">Enter</kbd> Add item</span>
            <span><kbd className="px-1.5 py-0.5 bg-muted rounded text-foreground">Esc</kbd> Close</span>
          </div>
        </div>
      )}
    </div>
  );
}
