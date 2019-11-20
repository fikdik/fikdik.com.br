import * as counterActions from './counter/actions'

/* HEAVILY borrowed from redux/bindActionCreators
    important: first parameter given to actions is payload, second is dispatch
*/
const bindDispatchToActions = (actions, dispatch) => {
  const mappedActions = {}
  for (const key in actions) {
    const action = actions[key]
    if (typeof action === 'function') {
      if (action instanceof Promise) {
        mappedActions[key] = function(payload = {}) {
          return action(payload, dispatch)
        }
      } else {
        mappedActions[key] = function(params) {
          return dispatch(action.apply(this, [params, dispatch]))
        }
      }
    }
  }
  return mappedActions
}
function getRootActions(dispatch) {
  return {
    counter: bindDispatchToActions(counterActions, dispatch),
  }
}
export default getRootActions
