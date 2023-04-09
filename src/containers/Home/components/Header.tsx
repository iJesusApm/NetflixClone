import React from 'react'
import {View, Image, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {COLORS} from '../../../styles/colors'
import {useNavigation} from '@react-navigation/native'
import {SCREENS_ROUTES} from '../../../navigation/constans'

const Header = () => {
  const navigation = useNavigation()
  const handleLogout = () => {
    navigation.navigate(SCREENS_ROUTES.LOGIN)
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/resources/logo-short.png')} style={styles.logo} resizeMode="contain" />
      <View style={styles.options}>
        <Ionicons name="search-outline" size={24} color={COLORS.WHITE} />
        <TouchableOpacity style={styles.profile} onPress={handleLogout}>
          <Image
            source={require('../../../assets/resources/profile-image.png')}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: Platform.OS === 'android' ? 40 : 0,
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
    marginHorizontal: 10,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Header
