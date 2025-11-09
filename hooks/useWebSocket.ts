import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateTokenPrice } from '@/store/slices/tokenSlice';

export const useWebSocket = (url: string) => {
  const dispatch = useDispatch();
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // For demo purposes, we'll simulate WebSocket updates
    const interval = setInterval(() => {
      const mockUpdates = [
        { tokenId: '1', price: 1850.42 + (Math.random() - 0.5) * 10 },
        { tokenId: '2', price: 29450.78 + (Math.random() - 0.5) * 100 },
        { tokenId: '3', price: 4.23 + (Math.random() - 0.5) * 0.1 },
        { tokenId: '4', price: 7.89 + (Math.random() - 0.5) * 0.2 },
      ];

      mockUpdates.forEach(update => {
        dispatch(updateTokenPrice(update));
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      ws.current?.close();
    };
  }, [url, dispatch]);

  return ws.current;
};
