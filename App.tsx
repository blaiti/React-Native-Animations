/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import FlatListAnimation from './src/screens/FlatListAnimation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatListAnimation />
    </SafeAreaView>
  );
}

export default App;
