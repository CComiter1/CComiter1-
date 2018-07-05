import { combineReducers } from 'redux'

import user from './user'
import call from './call'
import password from './password'

export default combineReducers({
  user,
  call,
  password,
})
