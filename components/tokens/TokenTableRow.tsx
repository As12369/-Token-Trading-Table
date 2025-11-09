"use client"

import React from 'react';
import { Token } from '@/types/token';
import { cn } from '@/lib/utils';
import PriceCell from './PriceCell';
import TagBadge from './TagBadge';

interface TokenTableRowProps {
  token: Token;
}

const TokenTableRow: React.FC<TokenTableRowProps> = ({ token }) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-accent/50 transition-colors cursor-pointer",
        "text-sm"
      )}
    >
      <div className="col-span-3 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
          {token.symbol.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-foreground">{token.name}</div>
          <div className="text-muted-foreground text-xs">{token.symbol}</div>
        </div>
      </div>

      <div className="col-span-2">
        <PriceCell price={token.price} previousPrice={token.price} />
      </div>

      <div className="col-span-1">
        <div className={cn(
          "font-medium",
          token.priceChange24h > 0 ? "text-green-500" : "text-red-500"
        )}>
          {token.priceChange24h > 0 ? '+' : ''}{token.priceChange24h.toFixed(2)}%
        </div>
      </div>

      <div className="col-span-2">
        <div className="text-foreground">
          ${(token.volume24h / 1000).toFixed(1)}K
        </div>
      </div>

      <div className="col-span-2">
        <div className="text-foreground">
          ${(token.liquidity / 1000).toFixed(1)}K
        </div>
      </div>

      <div className="col-span-1">
        <div className="text-muted-foreground text-xs">
          {token.age}d
        </div>
      </div>

      <div className="col-span-1 flex items-center space-x-2">
        <div className="flex space-x-1">
          {token.isNew && <TagBadge type="new" />}
          {token.isMigrated && <TagBadge type="migrated" />}
          {token.isFinalStretch && <TagBadge type="final-stretch" />}
        </div>
      </div>
    </div>
  );
};

export default React.memo(TokenTableRow);
