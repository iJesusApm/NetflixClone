import React from 'react'
import {Image, StyleSheet} from 'react-native'

const Logo = () => {
  return <Image style={styles.logo} source={require('../assets/resources/logo-netflix.png')} resizeMode="contain" />
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 120,
  },
})

export default Logo
