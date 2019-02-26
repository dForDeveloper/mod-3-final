export const setIsLoading = (bool) => ({
  type: 'SET_IS_LOADING',
  isLoading: bool
});

export const setHasErrored = (message) => ({
  type: 'SET_HAS_ERRORED',
  message
});

export const setPresidents = (presidents) => ({
  type: 'SET_PRESIDENTS',
  presidents
});