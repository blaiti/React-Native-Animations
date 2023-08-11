import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import IUserCardProps from './IUserCard';
import {Colors, Mixins, Spacing} from '../../styles';

function UserCard({user, viewableItems}: IUserCardProps) {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = viewableItems.value
      .filter(item => item.isViewable)
      .find(viewableItems => viewableItems.item.id === user.id);
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.9),
        },
      ],
    };
  }, []);
  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Image
        resizeMode="cover"
        style={styles.picture}
        source={{uri: user.picture}}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.subTitle}>{user.username}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.SCALE_12,
    marginVertical: Spacing.SCALE_5,
    backgroundColor: Colors.PRIMARY,
    borderRadius: Mixins.scaleSize(10),
  },
  picture: {
    width: Mixins.scaleSize(60),
    height: Mixins.scaleSize(60),
    borderRadius: Mixins.scaleSize(30),
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: Spacing.SCALE_8,
  },
  title: {
    fontWeight: '700',
    color: Colors.WHITE,
    fontSize: Mixins.scaleFont(20),
  },
  subTitle: {
    fontWeight: '300',
    color: Colors.WHITE,
    marginTop: Spacing.SCALE_5,
    fontSize: Mixins.scaleFont(13),
  },
});

export default UserCard;
