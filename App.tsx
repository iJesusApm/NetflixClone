import React from 'react'
import {View, StatusBar} from 'react-native'

import Initialize from './src/App'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Initialize />
      <StatusBar barStyle="light-content" translucent />
    </View>
  )
}
