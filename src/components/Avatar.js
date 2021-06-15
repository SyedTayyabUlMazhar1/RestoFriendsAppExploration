import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  avatar: size => ({
    width: size,
    height: size,
    borderRadius: 2555,
  }),
});
export default Avatar = ({uri, size}) => {
  return <Image source={{uri: uri}} style={styles.avatar(size)} />;
};
