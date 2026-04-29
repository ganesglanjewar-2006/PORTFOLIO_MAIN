import { createSlice } from '@reduxjs/toolkit';
import { portfolioData } from '../../config';

const initialState = {
  data: portfolioData,
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPortfolioData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setPortfolioData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
