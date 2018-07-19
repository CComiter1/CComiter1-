import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as user from './user'
import * as call from './call'
import env from '../../environment'

const mock = new MockAdapter(axios)
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('user helper funcs', () => {
  describe('camelorm', () => {
    it('should return a string', () => {
      expect(typeof user.camelorm('string')).toBe('string')
    })
    it('should return empty for empty', () => {
      expect(user.camelorm('')).toBe('')
    })
    it('should capitalize first letter', () => {
      expect(user.camelorm('abb')).toBe('Abb')
    })
    it('should split camelCase to regular english', () => {
      expect(user.camelorm('testVariableName')).toBe('Test Variable Name')
    })
  })
  describe('convertToCustomer', () => {
    const fakeInformation = {
      accountLocked: { name: 'accountLocked', value: 'True' },
    }
    it('should return an array', () => {
      expect(Array.isArray(user.convertToCustomer(fakeInformation))).toBeTruthy()
    })
  })
})

const mockUser = [
  { label: 'First Name', data: 'test' },
  { label: 'Label Me', data: 'goood' },
]

describe('user actions', () => {
  it('should make READ_USER action', () => {
    expect(user.readUser(mockUser)).toEqual({
      type: user.READ_USER,
      user: mockUser,
    })
  })
  const error = 'OOOOOO ERROR'
  it('should make ERROR_USER action', () => {
    expect(user.errorUser(error)).toEqual({
      type: user.ERROR_USER,
      error,
    })
  })
})

describe('user thunks', () => {
  let store = mockStore()
  afterEach(() => {
    mock.reset()
    store = mockStore()
  })

  it('dispatch readuser on successful getUser', async (done) => {
    const customerID = 1234
    mock.onGet(`${env.API_URL}customers/${customerID}`).reply(200, mockUser)
    const expectedActions = [
      { type: user.READ_USER, user: mockUser },
    ]
    await store.dispatch(user.getUser(customerID))
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
  it('dispatch errorUser on failed getUser', async (done) => {
    const customerID = 1234
    mock.onGet(`${env.API_URL}customers/${customerID}`).reply(400)
    const expectedActions = [
      { type: user.ERROR_USER, error: new Error('Request failed with status code 400') },
    ]
    await store.dispatch(user.getUser(customerID))
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
})

describe('user reducer', () => {
  const defaultState = [
    { label: 'First Name', data: 'Charles' },
    { label: 'Customer ID', data: '009' },
    { label: 'Account Status', data: 'Unlocked' },
  ]
  const error = 'FOOSDOFOSDOOOOO ERROR'

  it('should return the default state', () => {
    expect(user.default(undefined, {})).toEqual(defaultState)
  })
  it('should handle READ_USER', () => {
    expect(user.default(
      undefined,
      {
        type: user.READ_USER,
        user: mockUser,
      },
    )).toEqual(mockUser)
  })
  it('should handle ERROR_USER', () => {
    expect(user.default(
      mockUser,
      {
        type: user.ERROR_USER,
        error,
      },
    )).toEqual(Object.assign(mockUser, { error }))
  })
})

describe('call', () => {
  describe('processContact', () => {
    let store = mockStore()
    afterEach(() => {
      store = mockStore()
    })
    const contact = {
      getAttributes: () => mockUser,
    }
    it('to dispatch readUser', () => {
      store.dispatch(call.proccessContact(contact))
      const expectedActions = [
        { type: user.READ_USER, user: mockUser },
      ]
      expect(JSON.stringify(store.getActions())).toEqual(JSON.stringify(expectedActions))
    })
  })
  describe('initCCP', () => {
    it('returns a thunk', () => {
      expect(typeof call.initCCP()).toEqual('function')
    })
  })
})