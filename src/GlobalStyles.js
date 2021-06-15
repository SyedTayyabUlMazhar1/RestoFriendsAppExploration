import {StyleSheet} from 'react-native';
import GlobalColors from './GlobalColors';
import Fonts from './assets/fonts';

export const TextStyles = StyleSheet.create({
  titleDark: {
    color: GlobalColors.dark,
    fontSize: 24,
  },
  titleLight: {
    color: GlobalColors.light,
    fontSize: 24,
  },
  subtitleLight: {
    color: GlobalColors.light,
    fontSize: 16,
    fontFamily:Fonts.semibold
  },
  subtitleDark: {
    color: GlobalColors.dark,
    fontSize: 16,
    fontWeight: '500',
  },
  subtitleDarkRed: {
    color: GlobalColors.darkRed,
    fontSize: 16,
    fontWeight: '500',
  },
  smallLight: {
    color: GlobalColors.light,
    fontSize: 14,
  },
  smallDarkRed: {
    color: GlobalColors.darkRed,
    fontSize: 14,
  },
  xsmallLight: {
    color: GlobalColors.light,
    fontSize: 12,
    fontFamily: Fonts.semibold,
  },
});
