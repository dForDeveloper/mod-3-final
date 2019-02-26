import * as action from './index';

describe('setIsLoading', () => {
  it('should return an action with type SET_IS_LOADING and a boolean', () => {
    const expected = {
      type: 'SET_IS_LOADING',
      isLoading: true
    }
    const result = action.setIsLoading(true);
    expect(result).toEqual(expected);
  });
});

describe('setHasErrored', () => {
  it('should return an action with type SET_HAS_ERRORED and a message', () => {
    const expected = {
      type: 'SET_HAS_ERRORED',
      message: 'Not found'
    }
    const result = action.setHasErrored('Not found');
    expect(result).toEqual(expected);
  });
});

describe('setPresidents', () => {
  it('should return an action with type SET_PRESIDENTS and an array', () => {
    const mockPresidents = [
      { president: 'George W. Bush'},
      { president: 'Donald J. Trump'}
    ];
    const expected = {
      type: 'SET_PRESIDENTS',
      presidents: mockPresidents
    }
    const result = action.setPresidents(mockPresidents);
    expect(result).toEqual(expected);
  });
});