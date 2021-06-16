import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import IconPressable from './IconPressable';

import Avatar from './Avatar';
import GlobalColors from '../GlobalColors';
import Icons from '../icons';
import Fonts from '../assets/fonts';
import {TextStyles} from '../GlobalStyles';
import SingleLineText from './SingleLineText';

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    backgroundColor: 'white',
    padding: 24,
    alignItems: 'center',
    width: 170,
    shadowRadius: 8,
    alignSelf: 'flex-start',
    shadowOpacity: 0.09,
    borderRadius: 8,
    shadowOffset: {height: 4, width: -2},
  },
  remove: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  name: {
    ...TextStyles.subtitleDark,
    marginTop: 16,
  },
  topTallets: {
    ...TextStyles.smallLight,
    marginTop: 8,
  },

  buttonStyle: {
    marginTop: 16,
    backgroundColor: GlobalColors.darkRed,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: {height: 4},
    height: 42,
    shadowColor: GlobalColors.darkRed,
  },
  buttonText: {
    fontFamily: Fonts.bold,
    color: 'white',
  },
});
export default FriendCard = props => {
  const {uri, name, style, itemIndex, onRemovePress} = props;

  return (
    <View style={[styles.container, style]}>
      <IconPressable
        icon={Icons.remove}
        size={14}
        style={styles.remove}
        onPress={() => onRemovePress(itemIndex)}
      />
      <Avatar uri={uri} size={48} />
      <SingleLineText style={styles.name}>{name}</SingleLineText>
      <SingleLineText style={styles.topTallets}>Top Tallets</SingleLineText>
      <TouchableOpacity style={styles.buttonStyle}>
        <SingleLineText style={styles.buttonText}>Add Request</SingleLineText>
      </TouchableOpacity>
    </View>
  );
};
