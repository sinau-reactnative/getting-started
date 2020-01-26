import React from 'react';

import {View, StyleSheet, Dimensions, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <Icon
        style={styles.searchIcon}
        name="magnify"
        size={30}
        color="#3faba4"
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Awesome Place"
        onChangeText={text => {
          console.log(text);
        }}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH / 1.1,
    backgroundColor: '#fff',
    padding: 2,
    paddingLeft: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  searchInput: {
    paddingLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 15,
    width: SCREEN_WIDTH / 1.5,
  },
});

export default Search;
