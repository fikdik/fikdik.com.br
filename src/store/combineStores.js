// A size-optimized refactor of Redux's combineReducers.
// All safeguards removed. Use at your own risk.
// https://github.com/reduxjs/redux/blob/master/src/combineReducers.js

const combineReducers = reducers => (state, action) => {
  let hasChanged
  const nextState = Object.keys(reducers).reduce((result, key) => {
    result[key] = reducers[key](state[key], action)
    hasChanged = hasChanged || result[key] !== state[key]
    return result
  }, {})
  if (hasChanged) {
    localStorage.setItem(
      process.env.APP_NAME,
      JSON.stringify({ ...nextState, ux: {} })
    )
    return nextState
  }
  return state
}

const combineStores = stores => {
  const storesArray = Object.entries(stores)
  const rootInitialState = {}
  const reducers = {}
  for (const [key, store] of storesArray) {
    rootInitialState[key] = store.initialState
    reducers[key] = store.reducer
  }
  const rootReducer = combineReducers(reducers)
  return { rootReducer, rootInitialState }
}

export default combineStores
