import React from 'react'
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {COLORS} from '../../../styles/colors'
import {Icon} from 'react-native-elements'

type TopSectionProps = {
  featuredPoster: string
}

type FeaturedMovieProps = {
  poster: string
}

const FeaturedMovie = ({poster}: FeaturedMovieProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: poster}} style={styles.image} resizeMode="stretch" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.action}>
          <Icon name="add" size={32} color={COLORS.WHITE} />
          <Text style={styles.actionText}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>▶ Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Icon name="info-outline" size={32} color={COLORS.WHITE} />
          <Text style={styles.actionText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Options = () => {
  return (
    <View style={styles.options}>
      <Text style={styles.text}>TV Shows</Text>
      <Text style={styles.text}>Movies</Text>
      <Text style={styles.text}>Categories</Text>
    </View>
  )
}

const TopSection = ({featuredPoster}: TopSectionProps) => {
  return (
    <>
      <FeaturedMovie poster={featuredPoster} />
      <Options />
    </>
  )
}

const styles = StyleSheet.create({
  options: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    width: '100%',
    top: 24,
  },
  text: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    marginRight: 20,
  },
  container: {
    marginTop: 20,
  },
  imageContainer: {
    width: '100%',
    height: 480,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    position: 'absolute',
    bottom: 5,
  },
  action: {
    alignItems: 'center',
    padding: 12,
  },
  actionText: {
    color: COLORS.WHITE,
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: COLORS.WHITE,
  },
  buttonText: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default TopSection
