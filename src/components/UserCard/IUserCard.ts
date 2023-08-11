import {ViewToken} from 'react-native';
import Animated from 'react-native-reanimated';

interface IUser {
  id: string;
  name: string;
  username: string;
  picture: string;
}

interface IUserCardProps {
  user: IUser;
  viewableItems: Animated.SharedValue<ViewToken[]>;
}

export default IUserCardProps;
