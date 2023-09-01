import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withDelay,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

import {Colors} from '../../styles';
import ILoader from './ILoader';

const Loader = ({delay}: ILoader) => {
  const load = useSharedValue(0);

  const loadStyle = useAnimatedStyle(() => {
    return {
      opacity: 1 - load.value,
      transform: [
        {
          scale: interpolate(load.value, [0, 1], [0, 4]),
        },
      ],
    };
  });

  useEffect(() => {
    load.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 4000,
        }),
        -1,
        false,
      ),
    );
  }, [delay, load]);

  return <Animated.View style={[styles.container, loadStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: Colors.PRIMARY,
    borderWidth: 5,
  },
});

export default Loader;
