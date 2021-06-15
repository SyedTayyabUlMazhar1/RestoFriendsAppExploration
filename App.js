/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';
import {Rating, Theme} from './src/components/Rating';
import Avatar from './src/components/Avatar';
import GlobalColors from './src/GlobalColors';
import Icons from './src/icons';
import {TextStyles} from './src/GlobalStyles';

const styles = StyleSheet.create({
  centeredText: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    flex: 1,
    paddingTop: 8,
  },
});

const profilePic =
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=90';
const name = 'Chloe Hannouille';
const rated = 'Rated a new resturant';
const postedAt = 'Posted 2 hours ago';

export default App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <SearchBar />
        <View
          style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 16}}>
          <Avatar uri={profilePic} size={52} />
          <View style={{marginLeft: 16}}>
            <Text style={TextStyles.titleDark}>{name}</Text>
            <Text style={[TextStyles.subtitleLight, {marginTop: 4}]}>
              {rated}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 14,
              }}>
              <Image source={Icons.clock} style={{width: 18, height: 18}} />
              <Text style={[TextStyles.smallLight, {marginLeft: 12}]}>
                {postedAt}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginLeft: 'auto'}}>
            <Rating value={5} theme={Theme.light} />
            <Text style={[TextStyles.subtitleDarkRed, {marginTop: 8}]}>
              Outstanding!
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const SearchBar = () => {
  const placeholder = 'Find a resturant...';
  const styles = StyleSheet.create({
    container: {
      borderRadius: 6,
      borderColor: '#eaeaea',
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderWidth: 1,
      flexDirection: 'row',
      marginHorizontal: 16,
    },
    input: {
      // ...TextStyles.subtitleLight,
      color: GlobalColors.light,
      fontSize: 16,
      fontFamily: 'Quicksand-Semibold',
      flex: 1,
      marginLeft: 12,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={{width: 20, height: 20}} source={Icons.search} />
      <TextInput placeholder={placeholder} style={styles.input} />
      <Image style={{width: 20, height: 20}} source={Icons.mic} />
    </View>
  );
};
