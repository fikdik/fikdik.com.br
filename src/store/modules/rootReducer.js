import combineStores from "../combineStores"

import * as ux from "./ux/reducer"
import * as auth from "./auth/reducer"
import * as counter from "./counter/reducer"

const combinedStore = combineStores({
  ux,
  auth,
  counter,
})

const { rootInitialState: cleanState, rootReducer } = combinedStore

const persistedStores =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem(process.env.APP_NAME))

const rootInitialState = {
  ...cleanState,
  ...persistedStores,
}

export { rootInitialState, rootReducer }
