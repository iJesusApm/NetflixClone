import React from 'react'
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/resources/logo-short.png')} style={styles.logo} resizeMode="contain" />
      <TouchableOpacity style={styles.profile}>
        <Image
          source={require('../../../assets/resources/profile-image.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
})

export default Header
