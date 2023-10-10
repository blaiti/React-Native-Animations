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

import RootScreen from './src/screens';
import FlatListAnimation from './src/screens/FlatListAnimation';
import ProgressBarAnimation from './src/screens/ProgressBarAnimation';
import LoaderAnimation from './src/screens/LoaderAnimation';
import ToastAnimation from './src/screens/ToastAnimation';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={RootScreen} />
          <Stack.Screen name="FlatList" component={FlatListAnimation} />
          <Stack.Screen name="ProgressBar" component={ProgressBarAnimation} />
          <Stack.Screen name="Loader" component={LoaderAnimation} />
          <Stack.Screen name="Toast" component={ToastAnimation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
