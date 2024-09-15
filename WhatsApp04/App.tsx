import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Header from './components/header/Header';
import Main from './components/body/Main';
import Footer from './components/footer/Footer';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
      <View style={styles.container}>
        <ScrollView style={styles.header}  >
            <Header />
        </ScrollView>
        <ScrollView>
          <View style={styles.main}>
            <Main />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position:'relative',
  },
  header: {
    width: '100%',
    maxHeight:75,
    // position: 'relative',
    // top: 0,
    // backgroundColor: 'black',
  },
  main: {
    position: 'relative',
    top: 0,
    flex:1,
    backgroundColor: 'blue',
    // height: '100%',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    // borderWidth:2,
    // borderColor:'yellow'
  },
});

export default App;
