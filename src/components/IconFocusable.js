import React from 'react';
import {Image, StyleSheet} from 'react-native';
import GlobalColors from '../GlobalColors';

const styles = StyleSheet.create({
  icon: (size, focused) => ({
    width: size,
    height: size,
    tintColor: focused ? GlobalColors.darkRed : GlobalColors.light,
  }),
});
export default Icon = props => {
  const {size, icon, focused} = props;
  return (
    <Image source={icon} style={[styles.icon(size, focused), props.style]} />
  );
};
