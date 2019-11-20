import React, { useReducer, createContext, useContext, useMemo } from 'react'

import { rootInitialState, rootReducer } from './modules/rootReducer'
import getRootActions from './modules/rootActions'

// create the contexts for the global state, dispatch and actions
export const Store = createContext()
export const Dispatch = createContext()
export const Actions = createContext()

// this is what a consuming component will use to access values from the store
// the 'useContext' hook gives us the state values from whatever context we pass into it
export const useStore = () => {
  const store = useContext(Store)
  return store
}

// this is what a consuming component will use to access actions
export const useActions = () => {
  const actions = useContext(Actions)
  return actions
}

// this is an optional way to directly access the dispatch
export const useDispatch = () => {
  const dispatch = useContext(Dispatch)
  return dispatch
}

/*
  The useReducer hook gives us the state and dispatch from the combined reducers and states,
    we then use that state as our global store and give it to the wrapping Store Provider,
    making it available to all sub-components.
  The dispatch is given to the 'getRootActions' function, making it available to all actions
    We wrap that call to getRootActions in the 'useMemo' hook, which, when combined with the
    second parameter - an empty array - only runs once on mount, even if the state updates.
    We do this because actions are static functions that won't need to update on rerender
*/
function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(rootReducer, rootInitialState)
  const actions = useMemo(() => getRootActions(dispatch), [])

  return (
    <Store.Provider value={store}>
      <Dispatch.Provider value={dispatch}>
        <Actions.Provider value={actions}>{children}</Actions.Provider>
      </Dispatch.Provider>
    </Store.Provider>
  )
}

export default StoreProvider
