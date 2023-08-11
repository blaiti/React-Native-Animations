import React from 'react';
import {StyleSheet, View, FlatList, Text, ViewToken} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

import {Colors, Mixins, Spacing} from '../styles';
import users from '../constants/users';
import UserCard from '../components/UserCard';

type Props = {};

function FlatListAnimation({}: Props) {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const onViewRef = React.useRef(({viewableItems: vItems}) => {
    viewableItems.value = vItems;
  });
  const viewConfigRef = React.useRef({
    waitForInteraction: false,
    itemVisiblePercentThreshold: 75,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      <FlatList
        data={users}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <UserCard user={item} viewableItems={viewableItems} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.SCALE_16,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontWeight: '700',
    color: Colors.BLACK,
    marginBottom: Spacing.SCALE_5,
    fontSize: Mixins.scaleFont(30),
  },
});

export default FlatListAnimation;
