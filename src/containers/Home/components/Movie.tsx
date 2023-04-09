import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'

import {TMovie} from '../types'
import {getUniqueMovie} from '../../../services/movies'

type Props = {
  movie: TMovie
}
const MovieItem = ({movie}: Props) => {
  const [movieDetail, setMovieDetail] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUniqueMovie(movie.id)
        setMovieDetail(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <TouchableOpacity>
      <Image style={styles.image} source={{uri: movieDetail?.poster}} />
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
