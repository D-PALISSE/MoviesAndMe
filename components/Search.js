import React, { Component } from "react"
import { StyleSheet, View, Text, Button, TextInput, FlatList } from "react-native"
import films from '../helpers/filmsData.js'

class Search extends Component {
  render() {
    return(
      <View style={styles.mainContainer} >
        <TextInput placeholder="Titre du film" style={styles.textInput} />
        <Button title="Rechercher" onPress={() => {}} />
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString() }
          renderItem={({item}) => <Text>{item.title}</Text>}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
  },

  textInput: {
    margin: 5,
    height: 50,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: '#000000',
    borderWidth: 1,
  }
})

export default Search
