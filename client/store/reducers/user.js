import axios from 'axios'
import env from '../../environment'

export const READ_USER = 'READ_USER'
export const ERROR_USER = 'ERROR_USER'

export const readUser = user => ({ type: READ_USER, user })
export const errorUser = error => ({ type: ERROR_USER, error })

export const getUser = customerID =>
  async (dispatch) => {
    try {
      const user = await axios.get(`${env.API_URL}customers/${customerID}`)
      dispatch(readUser(user))
    } catch (error) {
      dispatch(errorUser(error))
    }
  }

const defaultState = {
  error: null,
  customerID: '',
  name: '',
  accountStatus: '',
  lastResetTimestamp: '',
  phoneNumber: '',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case READ_USER:
      return action.user
    case ERROR_USER:
      return Object.assign(state, {
        error: action.error,
      })
    default:
      return state
  }
}
