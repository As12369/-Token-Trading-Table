import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setTokens, setLoading, setError } from '@/store/slices/tokenSlice';
import { Token } from '@/types/token';

const fetchTokens = async (): Promise<Token[]> => {
  const response = await fetch('/api/tokens');
  if (!response.ok) {
    throw new Error('Failed to fetch tokens');
  }
  return response.json();
};

export const useTokens = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['tokens'],
    queryFn: fetchTokens,
    onSuccess: (data) => {
      dispatch(setTokens(data));
      dispatch(setLoading(false));
    },
    onError: (error: Error) => {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    },
    refetchInterval: 30000,
  });
};
