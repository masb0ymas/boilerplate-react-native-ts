/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/App'

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />)
})
