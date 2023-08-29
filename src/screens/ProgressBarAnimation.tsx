import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Colors, Mixins, Spacing} from '../styles';
import ProgressBar from '../components/ProgressBar';

function ProgressBarAnimation() {
  const width = 5;
  const [progress, setProgress] = useState<number>(0);

  const __next = () => {
    if (progress < width) {
      setProgress(progress + 1);
    }
  };

  const __previous = () => {
    if (progress > 0) {
      setProgress(progress - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar width={width} progress={progress} />

      <View style={styles.rowContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={__previous}
          style={[styles.btnContainder, {backgroundColor: Colors.WHITE}]}>
          <Text style={[styles.btnText, {color: Colors.PRIMARY}]}>
            Previous
          </Text>
        </TouchableOpacity>

        <View style={{width: Spacing.SCALE_8}} />

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={__next}
          style={styles.btnContainder}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Spacing.SCALE_16,
    backgroundColor: Colors.WHITE,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnContainder: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.SCALE_8,
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
    borderWidth: Mixins.scaleSize(1),
    borderRadius: Mixins.scaleSize(5),
  },
  btnText: {
    fontWeight: '400',
    color: Colors.WHITE,
    fontSize: Mixins.scaleFont(20),
  },
});

export default ProgressBarAnimation;
