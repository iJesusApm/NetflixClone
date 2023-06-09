import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import AuthScreen from '../../containers/Auth'

import {SCREENS_ROUTES} from '../constans'
import BottomTabNavigator from './BottomTab'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS_ROUTES.LOGIN}
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name={SCREENS_ROUTES.LOGIN} component={AuthScreen} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS_ROUTES.HOME} component={BottomTabNavigator} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
