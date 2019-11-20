import produce from "immer"
import authTypes from "./types"

export const initialState = {
  token: "",
}

export const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      case authTypes.SIGN_IN_SUCCESS: {
        break
      }
      case authTypes.SIGN_OUT: {
        draft.token = ""
        break
      }
      default:
    }
  })
}
