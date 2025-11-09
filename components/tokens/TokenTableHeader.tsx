"use client"

import React from 'react';
import { Token } from '@/types/token';
import { cn } from '@/lib/utils';
import { ChevronUpDown, ChevronUp, ChevronDown } from 'lucide-react';

interface TokenTableHeaderProps {
  sortBy: keyof Token | null;
  sortDirection: 'asc' | 'desc';
  onSort: (column: keyof Token) => void;
}

const TokenTableHeader: React.FC<TokenTableHeaderProps> = ({
  sortBy,
  sortDirection,
  onSort,
}) => {
  const columns: { key: keyof Token; label: string; sortable: boolean }[] = [
    { key: 'name', label: 'Token', sortable: true },
    { key: 'price', label: 'Price', sortable: true },
    { key: 'priceChange24h', label: '24h %', sortable: true },
    { key: 'volume24h', label: '24h Volume', sortable: true },
    { key: 'liquidity', label: 'Liquidity', sortable: true },
    { key: 'age', label: 'Age', sortable: true },
  ];

  const getSortIcon = (column: keyof Token) => {
    if (sortBy !== column) {
      return <ChevronUpDown className="h-4 w-4" />;
    }
    return sortDirection === 'asc' ? 
      <ChevronUp className="h-4 w-4" /> : 
      <ChevronDown className="h-4 w-4" />;
  };

  return (
    <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-muted/50 border-b border-border text-sm font-medium text-muted-foreground">
      {columns.map(({ key, label, sortable }) => (
        <button
          key={key}
          className={cn(
            "flex items-center space-x-1 transition-colors",
            sortable && "hover:text-foreground",
            `col-span-${key === 'name' ? 3 : key === 'price' ? 2 : key === 'priceChange24h' ? 1 : 2}`
          )}
          onClick={() => sortable && onSort(key)}
          disabled={!sortable}
        >
          <span>{label}</span>
          {sortable && getSortIcon(key)}
        </button>
      ))}
      <div className="col-span-2 text-right">Tags</div>
    </div>
  );
};

export default React.memo(TokenTableHeader);
