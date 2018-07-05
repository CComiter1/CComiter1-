import axios from 'axios'

import config from '../../environment'
import { readUser } from './user';

export const initCCP = element =>
  (dispatch) => {
    connect.core.initCCP(element, {
      ccpUrl: config.softCall,
      loginPopup: true,
      softphone: {
        disableRingtone: true,
        allowFramedSoftphone: true,
      },
    })
    connect.contact(async (contact) => {
      const attributes = contact.getAttributes()
      const res = await axios.get(`${config.API_URL}customers/${attributes.customerId.value}`)
      const parsed = res.json()
      const locked = parsed.accountLocked
      const accountStatus = (locked === true || locked === 'true' || locked === 'True') ?
        'Locked' :
        'Active'
      const customer = {
        customerID: parsed.customerId,
        name: parsed.firstName,
        accountStatus,
        lastResetTimestamp: parsed.passResetTimeStamp,
        phoneNumber: parsed.phoneNumber,
      }
      dispatch(readUser(customer))
    })
  }
