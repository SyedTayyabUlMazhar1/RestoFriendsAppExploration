import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import GlobalColors from '../GlobalColors';
import Icons from '../icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 32,
    height: 32,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    fontFamily: 'Quicksand-Bold',
  },
  star: {
    width: 10,
    height: 10,
    marginLeft: 1,
  },
});

const Theme = {
  light: StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: GlobalColors.lightRed,
    },
    text: {
      ...styles.text,
      color: GlobalColors.darkRed,
    },
    star: {
      ...styles.star,
      tintColor: GlobalColors.darkRed,
    },
  }),
  dark: StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: GlobalColors.darkRed,
    },
    text: {
      ...styles.text,
      color: '#FFF',
    },
    star: {
      ...styles.star,
      tintColor: '#FFF',
    },
  }),
  white: StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: '#FFF',
    },
    text: {
      ...styles.text,
      color: GlobalColors.darkRed,
    },
    star: {
      ...styles.star,
      tintColor: GlobalColors.darkRed,
    },
  }),
};

const Rating = ({value, theme}) => {
  return (
    <View style={theme.container}>
      <Text style={theme.text}>{value}</Text>
      <Image style={theme.star} source={Icons.star} />
    </View>
  );
};

export {Rating, Theme};
