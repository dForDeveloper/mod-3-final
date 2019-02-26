import { hasErroredReducer } from '../hasErroredReducer';

describe('hasErroredReducer', () => {
  it('should return an empty string by default', () => {
    const result = hasErroredReducer(undefined, {});
    expect(result).toEqual('');
  });

  it('should return a message when the action type is SET_HAS_ERRORED', () => {
    const mockAction = {
      type: 'SET_HAS_ERRORED',
      message: 'Not found'
    }
    const result = hasErroredReducer('', mockAction);
    expect(result).toEqual('Not found');
  });
});