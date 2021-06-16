import React from 'react';
import {View, StyleSheet} from 'react-native';
import GlobalColors from '../GlobalColors';
import Icons from '../icons';
import Icon from './Icon';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: GlobalColors.darkRed,
    borderRadius: 241412,
    shadowOpacity: 0.6,
    shadowOffset: {height: 8},
    shadowRadius: 12,
    shadowColor: GlobalColors.darkRed,
  },
});
export default FloatingActionButton = () => {
  return (
    <View style={styles.container}>
      <Icon icon={Icons.add} size={16} />
    </View>
  );
};
