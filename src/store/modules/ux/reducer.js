import produce from 'immer'

export const initialState = {
  working: false,
}

export const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    if (action.type) {
      if (action.type.endsWith('_REQUEST')) {
        draft.working = true
      } else if (
        action.type.endsWith('_SUCCESS') ||
        action.type.endsWith('_FAILURE')
      ) {
        draft.working = false
      }
    }
  })
}
