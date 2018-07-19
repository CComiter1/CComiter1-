/* eslint global-require: null */

describe('environment variables', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('returns the proper object in dev', () => {
    process.env.NODE_ENV = 'development'
    const env = require('./environment').default
    expect(env).toEqual({
      API_URL: 'https://api2.accenturejumpstart.com/callcenter-dev/',
      softCall: 'https://accenturejumpstart-dev.awsapps.com/connect/ccp#/',
    })
  })
  it('returns the proper object when not in dev', () => {
    process.env.NODE_ENV = 'production'
    const env = require('./environment').default
    expect(env).toEqual({
      API_URL: 'https://api2.accenturejumpstart.com/callcenter/',
      softCall: 'https://accenturejumpstart-dev.awsapps.com/connect/ccp#/',
    })
  })
})
