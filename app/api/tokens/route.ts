import { NextResponse } from 'next/server';
import { Token } from '@/types/token';

export async function GET() {
  const mockTokens: Token[] = [
    {
      id: '1',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1850.42,
      priceChange24h: 2.34,
      volume24h: 12500000,
      liquidity: 45000000,
      age: 5,
      isNew: true,
      isMigrated: false,
      isFinalStretch: false,
      tags: ['defi'],
    },
    {
      id: '2',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 29450.78,
      priceChange24h: -1.23,
      volume24h: 28700000,
      liquidity: 89000000,
      age: 2,
      isNew: false,
      isMigrated: true,
      isFinalStretch: true,
      tags: ['store-of-value'],
    },
    {
      id: '3',
      name: 'Uniswap',
      symbol: 'UNI',
      price: 4.23,
      priceChange24h: 5.67,
      volume24h: 4500000,
      liquidity: 12000000,
      age: 1,
      isNew: true,
      isMigrated: false,
      isFinalStretch: false,
      tags: ['dex', 'defi'],
    },
    {
      id: '4',
      name: 'Chainlink',
      symbol: 'LINK',
      price: 7.89,
      priceChange24h: -0.45,
      volume24h: 8900000,
      liquidity: 34000000,
      age: 3,
      isNew: false,
      isMigrated: true,
      isFinalStretch: false,
      tags: ['oracle'],
    },
  ];

  await new Promise(resolve => setTimeout(resolve, 800));

  return NextResponse.json(mockTokens);
}
