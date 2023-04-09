import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../../containers/Home'
import {Ionicons} from '@expo/vector-icons'
import {SCREENS_ROUTES} from '../constans'
import {Platform} from 'react-native'
import {COLORS} from '../../styles/colors'

const BottomTab = createBottomTabNavigator()

const screenOptions = {
  headerShown: false,
  tabBarStyle: {backgroundColor: COLORS.BACKGROUND, height: Platform.OS === 'ios' ? 100 : 60},
  tabBarActiveTintColor: COLORS.WHITE,
  tabBarInactiveTintColor: 'gray',
  tabBarLabelStyle: {
    marginTop: -4,
    marginBottom: 8,
    fontSize: 12,
  },
  tabBarLabelPosition: 'below-icon',
}

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName={SCREENS_ROUTES.HOME} screenOptions={screenOptions}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Ionicons name="home-outline" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Games"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Games',
          tabBarIcon: ({color}) => <Ionicons name="game-controller-outline" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="NewHot"
        component={HomeScreen}
        options={{
          tabBarLabel: 'New & Hot',
          tabBarIcon: ({color}) => <Ionicons name="flame-outline" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Scenes"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Scenes',
          tabBarIcon: ({color}) => <Ionicons name="videocam-outline" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color}) => <Ionicons name="download-outline" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
