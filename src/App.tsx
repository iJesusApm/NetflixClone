import React from 'react'
import {StatusBar} from 'react-native'

import Navigator from './navigation/navigator/Root'

const App = () => {
  return (
    <>
      <Navigator />
      <StatusBar barStyle="light-content" translucent />
    </>
  )
}

export default App
