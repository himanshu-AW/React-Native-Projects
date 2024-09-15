import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FormComp from './components/FormComp';
import FlattListComp from './components/FlattListComp';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FormComp /> */}
        <FlattListComp />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
