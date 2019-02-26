import { isLoadingReducer } from '../isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return false by default', () => {
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(false);
  });

  it('should return a boolean when the action type is SET_IS_LOADING', () => {
    const mockAction = {
      type: 'SET_IS_LOADING',
      isLoading: true
    }
    const result = isLoadingReducer(false, mockAction);
    expect(result).toEqual(true);
  });
});