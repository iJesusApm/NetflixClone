import React from 'react'
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native'
import {categories} from '../../assets/data/categories'
import Category from './components/Category'
import {COLORS} from '../../styles/colors'
import Header from './components/Header'
import TopSection from './components/TopSection'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.list}>
        <FlatList
          data={categories}
          ListHeaderComponent={<TopSection />}
          renderItem={({item}) => <Category category={item} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
