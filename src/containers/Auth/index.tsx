import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {COLORS} from '../../styles/colors'
import {SCREENS_ROUTES} from '../../navigation/constans'
import Logo from '../../components/Logo'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const handleLogin = () => {
    navigation.navigate(SCREENS_ROUTES.HOME)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email or phonenumber"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={COLORS.TEXT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={COLORS.TEXT_PLACEHOLDER}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.helpText}>Need help?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.helpText}>First time on Netflix? Subscribe now.</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BACKGROUND,
    padding: 20,
  },
  logoContainer: {
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.INPUT_BACKGROUND,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: COLORS.TEXT,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  helpText: {
    color: COLORS.WHITE,
    marginTop: 30,
    fontSize: 17,
    fontWeight: 'bold',
  },
})

export default LoginScreen
