import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';

import {Colors, Mixins, Spacing} from '../../styles';
import IProgressBarProps from './IProgressBar';

function ProgressBar({progress, width}: IProgressBarProps): JSX.Element {
  const progress_width = (progress * 100) / width;

  const animatedStyle = useAnimatedStyle(() => ({
    width: withSpring(progress_width + '%'),
  }));

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, animatedStyle]} />
      </View>

      <Text style={styles.text}>{`Step ${progress} of ${width}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.SCALE_12,
  },
  progressContainer: {
    height: Mixins.scaleSize(10),
    borderRadius: Mixins.scaleSize(5),
    backgroundColor: Colors.GRAY_LIGHT,
  },
  progressBar: {
    height: Mixins.scaleSize(10),
    backgroundColor: Colors.PRIMARY,
    borderRadius: Mixins.scaleSize(5),
  },
  text: {
    fontWeight: '500',
    color: Colors.GRAY_DARK,
    marginTop: Spacing.SCALE_8,
    fontSize: Mixins.scaleFont(15),
  },
});

export default ProgressBar;
