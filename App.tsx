/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FlatListAnimation from './src/screens/FlatListAnimation';
import ProgressBarAnimation from './src/screens/ProgressBarAnimation';
import RootScreen from './src/screens';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={RootScreen} />
          <Stack.Screen name="FlatList" component={FlatListAnimation} />
          <Stack.Screen name="ProgressBar" component={ProgressBarAnimation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
