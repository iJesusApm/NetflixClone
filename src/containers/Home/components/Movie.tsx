import React from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'

import {TMovie} from '../types'

type Props = {
  movie: TMovie
}
const MovieItem = ({movie}: Props) => {
  return (
    <TouchableOpacity>
      <Image style={styles.image} source={{uri: movie.poster}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 8,
  },
})

export default MovieItem
