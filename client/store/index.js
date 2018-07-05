import {
  createStore,
  applyMiddleware,
} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
))
const store = createStore(reducer, middleware)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers'))
  })
}

export default store
export * from './reducers/user'
export * from './reducers/password'
export * from './reducers/call'
