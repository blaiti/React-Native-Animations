import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../styles';
import Loader from '../components/Loader/Loader';

function LoaderAnimation() {
  return (
    <View style={styles.container}>
      <Loader delay={0} />
      <Loader delay={1000} />
      <Loader delay={2000} />
      <Loader delay={3000} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
});

export default LoaderAnimation;
