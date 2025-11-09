"use client"

import React from 'react';
import TokenTable from '@/components/tokens/TokenTable';
import { useWebSocket } from '@/hooks/useWebSocket';

export default function Home() {
  useWebSocket('wss://ws-feed.pro.coinbase.com'); // Using public Coinbase feed for demo

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Token Discovery
          </h1>
          <p className="text-muted-foreground">
            Discover new trading opportunities with real-time data
          </p>
        </div>
        
        <div className="bg-card rounded-lg border shadow-sm">
          <TokenTable />
        </div>
      </div>
    </main>
  );
}
