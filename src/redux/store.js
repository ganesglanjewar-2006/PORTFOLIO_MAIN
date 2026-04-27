import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './reducers/portfolioReducer';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});
