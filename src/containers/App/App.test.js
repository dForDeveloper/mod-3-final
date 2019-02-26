import { mapStateToProps, mapDispatchToProps } from './App';
import { setIsLoading, setHasErrored, setPresidents } from '../../actions';

describe('mapStateToProps', () => {
  it('should return a props object with the correct properties', () => {
    const mockState = {
      isLoading: false,
      hasErrored: '',
      presidents: [],
      extraProperty: true
    }
    const expected = {
      isLoading: false,
      hasErrored: '',
      presidents: [],
    }
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  const mockDispatch = jest.fn();
  const props = mapDispatchToProps(mockDispatch);

  it('should call dispatch with setIsLoading', () => {
    const expected = setIsLoading(true);
    props.setIsLoading(true);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with setHasErrored', () => {
    const expected = setHasErrored('Not found');
    props.setHasErrored('Not found');
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with setPresidents', () => {
    const mockPresidents = [
      { president: 'George W. Bush'},
      { president: 'Donald J. Trump'}
    ];
    const expected = setPresidents(mockPresidents);
    props.setPresidents(mockPresidents);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});