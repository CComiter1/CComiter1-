import axios from 'axios'
import cDeep from 'lodash.clonedeep'
import config from '../../environment'
import { readUser } from './user'
/* global connect */
/* eslint prefer-default-export: null */

export const proccessContact = contact =>
  (dispatch) => {
    const information = cDeep(contact.getAttributes())
    dispatch(readUser(information))
  }

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
    connect.contact((contact) => {
      dispatch(proccessContact(contact))
    })
  }
