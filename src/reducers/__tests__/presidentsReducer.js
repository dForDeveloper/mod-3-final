import { presidentsReducer } from '../presidentsReducer';

describe('presidentsReducer', () => {
  it('should return an empty array by default', () => {
    const result = presidentsReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return an array when the action type is SET_PRESIDENTS', () => {
    const mockPresidents = [
      { president: 'George W. Bush'},
      { president: 'Donald J. Trump'}
    ];
    const mockAction = {
      type: 'SET_PRESIDENTS',
      presidents: mockPresidents
    }
    const result = presidentsReducer([], mockAction);
    expect(result).toEqual(mockPresidents);
  });
});