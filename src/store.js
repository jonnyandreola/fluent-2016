import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const debugLogger = (store) => (next) => (action) => {
<<<<<<< HEAD
	console.groupCollapsed(action.type);
	console.info('action: ', action)

	const result = next(action)

	console.debug('state:', store.getState())

	console.groupEnd(action.type);

	return result
=======
  console.groupCollapsed(action.type)
  console.info('action:', action)

  const result = next(action)

  console.debug('state:', store.getState())
  console.groupEnd(action.type)

  return result
>>>>>>> 3ee517ec98bac0462188bd514f5b70670555c4f7
}

export default (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, debugLogger))
}
