import React from 'react';
import {Image} from 'react-native';

export default Icon = ({size, icon, style}) => {
  return <Image source={icon} style={[{width: size, height: size}, style]} />;
};
