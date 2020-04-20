import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search.js'

class App extends Component {
  render(){
    return (
      <Search />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
