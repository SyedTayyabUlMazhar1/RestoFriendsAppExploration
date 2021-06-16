import React from 'react';
import {Text} from 'react-native';

export default SingleLineText = props => {
  return (
    <Text {...props} numberOfLines={1}>
      {props.children}
    </Text>
  );
};
