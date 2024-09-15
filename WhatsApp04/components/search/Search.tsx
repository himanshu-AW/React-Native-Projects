import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={{position:'relative'}}>
        <Ionicons style={styles.searchIcon} name="search" size={30} color="black" />
        <TextInput style={styles.searchInput} placeholder="Search.." />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position:'relative',
    width: '96%',
    borderColor: 'gray',
    borderRadius: 40,
    borderWidth:0.2,
    backgroundColor: '#f2f2f2',
    margin:10,
    color:'gray',
  },
  searchIcon: {
    position:'absolute',
    left: 13,
    top: 8,
    pointerEvents:'none',
    // zIndex: 1,
  },
  searchInput: {
    color: 'black',
    fontWeight: 'bold',
    padding:10,
    fontSize: 20,
    paddingLeft:52
  },
});

export default Search;
