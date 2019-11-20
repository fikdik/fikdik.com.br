import wpRest from "../../../services/wpRest"
import authTypes from "./types"

export async function signIn(payload = {}, dispatch) {
  dispatch({ type: authTypes.SIGN_IN_REQUEST })
  try {
    const response = await wpRest.post()
  } catch (err) {
    dispatch({ type: authTypes.SIGN_FAILURE })
  }
  const { username, password } = payload
}
