import produce from "immer"
import counterTypes from "./types"

export const initialState = {
  qtd: 0,
}

export const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      case counterTypes.INCREMENT: {
        draft.qtd++
        break
      }
      case counterTypes.DECREMENT: {
        draft.qtd--
        break
      }
      case counterTypes.CHANGE_SUCCESS: {
        draft.qtd = action.payload.qtd
        break
      }
      default:
    }
  })
}
