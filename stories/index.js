import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import {
  ThemeProvider,
} from 'styled-components'
// import { Provider } from 'react-redux'
// import { Router } from 'react-router'

import theme from '../theme'
// import store from '../client/store'
// import history from '../client/history'

const req = require.context('../client/components', true, /\.stories\.js$/)

const loadStories = () => req.keys().forEach(file => req(file))

// addDecorator(story => <Provider store={store}><Router history={history}>{story()}</Router></Provider>)
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
configure(loadStories, module)
