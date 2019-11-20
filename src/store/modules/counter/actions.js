import counterTypes from "./types"

export function add(payload = {}, dispatch) {
  dispatch({ type: counterTypes.INCREMENT })
}

export function subtract(payload = {}, dispatch) {
  dispatch({ type: counterTypes.DECREMENT })
}

export function change(payload = {}, dispatch) {
  dispatch({ type: counterTypes.CHANGE_REQUEST })
  setTimeout(dispatch, 500, { type: counterTypes.CHANGE_SUCCESS, payload })
}
