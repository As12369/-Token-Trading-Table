"use client"

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PriceCellProps {
  price: number;
  previousPrice: number;
}

const PriceCell: React.FC<PriceCellProps> = ({ price, previousPrice }) => {
  const [animation, setAnimation] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    if (price > previousPrice) {
      setAnimation('up');
    } else if (price < previousPrice) {
      setAnimation('down');
    }

    const timer = setTimeout(() => {
      setAnimation(null);
    }, 1000);

    return () => clearTimeout(timer);
  }, [price, previousPrice]);

  return (
    <div className={cn(
      "font-medium transition-colors duration-300",
      animation === 'up' && "text-green-500 animate-price-up",
      animation === 'down' && "text-red-500 animate-price-down",
      !animation && "text-foreground"
    )}>
      ${price.toFixed(4)}
    </div>
  );
};

export default React.memo(PriceCell);
