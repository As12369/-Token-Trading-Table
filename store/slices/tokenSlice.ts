import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Token, TokenTableState } from '@/types/token';

const initialState: TokenTableState = {
  tokens: [],
  sortBy: null,
  sortDirection: 'desc',
  loading: false,
  error: null,
};

const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
    },
    updateTokenPrice: (state, action: PayloadAction<{ tokenId: string; price: number }>) => {
      const { tokenId, price } = action.payload;
      const token = state.tokens.find(t => t.id === tokenId);
      if (token) {
        token.price = price;
      }
    },
    setSort: (state, action: PayloadAction<keyof Token>) => {
      if (state.sortBy === action.payload) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortBy = action.payload;
        state.sortDirection = 'desc';
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setTokens, updateTokenPrice, setSort, setLoading, setError } = tokenSlice.actions;
export default tokenSlice.reducer;
