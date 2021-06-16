import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default Icon = ({size, icon, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={icon} style={[{width: size, height: size}]} />
    </TouchableOpacity>
  );
};
