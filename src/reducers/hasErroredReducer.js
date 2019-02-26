export const hasErroredReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_HAS_ERRORED':
      return action.message;
    default:
      return state;
  }
}