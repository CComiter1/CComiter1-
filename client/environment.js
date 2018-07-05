const dev = process.env.NODE_ENV === 'development'

export default {
  API_URL: dev ?
    'https://api2.accenturejumpstart.com/callcenter-dev/' :
    'https://api2.accenturejumpstart.com/callcenter/',
  softCall: 'https://accenturejumpstart-dev.awsapps.com/connect/ccp#/',
}
