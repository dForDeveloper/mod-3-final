import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer';

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer
});