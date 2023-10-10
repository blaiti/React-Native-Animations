import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Colors, Mixins, Spacing} from '../styles';
import {useNavigation} from '@react-navigation/native';

function RootScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('FlatList')}>
        <Text style={styles.itemText}>FlatList Animation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('ProgressBar')}>
        <Text style={styles.itemText}>Progress Bar Animation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Loader')}>
        <Text style={styles.itemText}>Loader Animation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Toast')}>
        <Text style={styles.itemText}>Toast Animation</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  itemContainer: {
    padding: Spacing.SCALE_16,
    borderBottomColor: Colors.GRAY_MEDIUM,
    borderBottomWidth: Mixins.scaleSize(1),
  },
  itemText: {
    fontWeight: '500',
    color: Colors.BLACK,
    fontSize: Mixins.scaleFont(17),
  },
});

export default RootScreen;
