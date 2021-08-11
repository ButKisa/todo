import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import Todo from './components/Todo'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Todo />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})