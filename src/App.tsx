import React, {StatusBar} from 'expo-status-bar'

import Navigator from './navigation/navigator/Root'

const App = () => {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  )
}

export default App
