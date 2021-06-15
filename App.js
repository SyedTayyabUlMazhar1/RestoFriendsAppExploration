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
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Rating, Theme} from './src/components/Rating';
import Icon from './src/components/Icon';

import Avatar from './src/components/Avatar';
import GlobalColors from './src/GlobalColors';
import Icons from './src/icons';
import Fonts from './src/assets/fonts';
import {TextStyles} from './src/GlobalStyles';

const CommonHorizontalMargin = 20;
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
        <ScrollView>
          <ReviewInfo />
          <ReviewResturant />
          <LovesComments />
          <RestoFriends />
        </ScrollView>
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
      marginHorizontal: CommonHorizontalMargin,
    },
    input: {
      color: GlobalColors.light,
      fontSize: 16,
      fontFamily: Fonts.semibold,
      flex: 1,
      marginLeft: 12,
    },
  });

  return (
    <View style={styles.container}>
      <Icon icon={Icons.search} size={20} />
      <TextInput placeholder={placeholder} style={styles.input} />
      <Icon icon={Icons.mic} size={20} />
    </View>
  );
};

const ReviewInfo = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginTop: 40,
      marginHorizontal: CommonHorizontalMargin,
    },
    textColumn: {
      marginLeft: 16,
    },
    rated: {
      ...TextStyles.subtitleLight,
      marginTop: 4,
    },
    postedAt: {
      ...TextStyles.xsmallLight,
      marginLeft: 12,
    },
    postedAtRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    ratingColumn: {
      alignItems: 'center',
      marginLeft: 'auto',
      justifyContent: 'space-evenly',
    },
  });
  return (
    <View style={styles.container}>
      <Avatar uri={profilePic} size={52} />
      <View style={styles.textColumn}>
        <Text style={TextStyles.titleDark}>{name}</Text>
        <Text style={styles.rated}>{rated}</Text>
        <View style={styles.postedAtRow}>
          <Icon icon={Icons.clock} size={18} />
          <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
      </View>
      <View style={styles.ratingColumn}>
        <Rating value={5} theme={Theme.light} />
        <Text style={TextStyles.subtitleDarkRed}>Outstanding!</Text>
      </View>
    </View>
  );
};

const foodImageUrl =
  'https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
const resturantName = 'Cafe Raybin Wolf';
const resturantAddress = 'Portugal Street View';

const ReviewResturant = () => {
  const styles = StyleSheet.create({
    container: {
      height: 300,
      marginHorizontal: CommonHorizontalMargin,
      marginTop: 32,
    },
    shadow: {
      width: '90%',
      alignSelf: 'center',
      height: '95%',
      shadowColor: GlobalColors.darkRed,
      shadowOffset: {height: 32},
      shadowOpacity: 0.3,
      shadowRadius: 16,
      borderRadius: 30,
      backgroundColor: GlobalColors.darkRed,
      position: 'absolute',
    },
    image: {
      flex: 1,
      borderRadius: 10,
    },
    resturantCard: {
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: 4,
      paddingHorizontal: 24,
      paddingVertical: 24,
      bottom: 30,
      left: 24,
    },
    resturantNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dropDownIcon: {
      marginLeft: 16,
    },
    resturantAddress: {
      ...TextStyles.subtitleLight,
      marginTop: 8,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.shadow} />
      <Image source={{uri: foodImageUrl}} style={styles.image} />
      <View style={styles.resturantCard}>
        <View style={styles.resturantNameContainer}>
          <Text style={TextStyles.titleDark}>{resturantName}</Text>
          <Icon icon={Icons.arrowDown} size={10} style={styles.dropDownIcon} />
        </View>
        <Text style={styles.resturantAddress}>{resturantAddress}</Text>
      </View>
    </View>
  );
};

const LovesComments = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: CommonHorizontalMargin,
      paddingVertical: 32,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    lovesIconTextContainer: {
      flexDirection: 'row',
    },
    lovesText: {
      ...TextStyles.subtitleDark,
      marginLeft: 16,
    },
    commentsIconTextContainer: {
      flexDirection: 'row',
    },
    commentsText: {
      ...TextStyles.subtitleLight,
      marginLeft: 16,
    },
    moreIcon: {
      // marginLeft: 'auto',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.lovesIconTextContainer}>
        <Icon size={24} icon={Icons.heart} />
        <Text style={styles.lovesText}>251 Loves</Text>
      </View>
      <View style={styles.commentsIconTextContainer}>
        <Icon size={24} icon={Icons.comment} />
        <Text style={styles.commentsText}>450 Comments</Text>
      </View>
      <Icon size={24} icon={Icons.more} />
    </View>
  );
};

const RestoFriends = () => {
  const styles = StyleSheet.create({
    container: {
      height: 350,
      paddingHorizontal: 24,
      paddingVertical: 32,
      backgroundColor: GlobalColors.backgroundGrey,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    restoFriends: {
      ...TextStyles.titleDark,
    },
    viewAll: {
      ...TextStyles.subtitleDarkRed,
    },
    list: {
      marginTop: 24,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restoFriends}>RestoFriends</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <FlatList
        style={styles.list}
        data={[, , , , , ,]}
        renderItem={() => (
          <RestoFriendCard uri={profilePic} name="Michael Korwin" />
        )}
        keyExtractor={(item, index) => index}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{width: 24}} />}
      />
    </View>
  );
};

const RestoFriendCard = ({uri, name}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 24,
      alignItems: 'center',
      width: 170,
      shadowRadius: 8,
      alignSelf: 'flex-start',
      shadowOpacity: 0.05,
      borderRadius: 8,
      shadowOffset: {height: 4},
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
      shadowColor: GlobalColors.darkRed,
    },
    buttonText: {
      fontFamily: Fonts.bold,
      color: 'white',
    },
  });
  return (
    <View style={styles.container}>
      <Icon icon={Icons.remove} size={14} style={styles.remove} />
      <Avatar uri={uri} size={48} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.topTallets}>Top Tallets</Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Add Request</Text>
      </TouchableOpacity>
    </View>
  );
};
