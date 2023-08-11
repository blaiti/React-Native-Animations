import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) => size * (WINDOW_WIDTH / guidelineBaseWidth);

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();
