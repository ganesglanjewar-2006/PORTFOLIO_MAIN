import { setPortfolioData } from '../reducers/portfolioReducer';

// Manual action creator example if needed for more complex logic
export const updatePortfolioData = (data) => (dispatch) => {
  dispatch(setPortfolioData(data));
};
