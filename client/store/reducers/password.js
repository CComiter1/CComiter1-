import axios from 'axios'

import env from '../../environment'

export const PASSWORD_CHANGE_SUCCESS = 'PASSWORD_CHANGE_SUCCESS'
export const PASSWORD_CHANGE_ERROR = 'PASSWORD_CHANGE_ERROR'

export const passwordChangeSuccess = () => ({ type: PASSWORD_CHANGE_SUCCESS })
export const passwordChangeError = error => ({ type: PASSWORD_CHANGE_ERROR, error })

export const putPassword = () =>
  async (dispatch, getState) => {
    const state = getState()
    const { customerId, phoneNumber } = state.user
    try {
      await axios.post(`${env.API_URL}customers/${customerId}/resetPassword`, { phoneNumber })
      dispatch(passwordChangeSuccess())
    } catch (error) {
      dispatch(passwordChangeError(error))
    }
  }

export default (state = null, action) => {
  switch (action.type) {
    case PASSWORD_CHANGE_ERROR:
      return true
    case PASSWORD_CHANGE_SUCCESS:
      return null
    default:
      return state
  }
}
