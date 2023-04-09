import React, {useEffect, useState} from 'react'
import {FlatList, Text, StyleSheet, View} from 'react-native'
import Movie from './Movie'

import {TCategory} from '../types'
import {COLORS} from '../../../styles/colors'
import {getMovies} from '../../../services/movies'

type Props = {
  category: TCategory
}

const Category = ({category}: Props) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies(category.id, 3)
        setMovies(data.titles)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => <Movie movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
})

export default Category
