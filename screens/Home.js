import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {Rating, Theme} from '../src/components/Rating';

import Icon from '../src/components/Icon';
import IconPressable from '../src/components/IconPressable';
import FriendCard from '../src/components/FriendCard';

import Avatar from '../src/components/Avatar';
import GlobalColors from '../src/GlobalColors';
import Icons from '../src/icons';
import Fonts from '../src/assets/fonts';
import {TextStyles} from '../src/GlobalStyles';
import SingleLineText from '../src/components/SingleLineText';

const CommonHorizontalMargin = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    // marginTop: 40,
  },
});

const profilePic =
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=90';
const name = 'Chloe Hannouille';
const rated = 'Rated a new resturant';
const postedAt = 'Posted 2 hours ago';

export default Screen = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: 'white'}} />
      <SafeAreaView
        style={{flex: 1, backgroundColor: GlobalColors.backgroundGrey}}>
        <WhiteView style={styles.container}>
          <WhiteView>
            <SearchBar />
          </WhiteView>

          <ScrollView style={styles.scrollView} bounces={false}>
            <WhiteView>
              <ReviewInfo />
              <ReviewResturant />
              <LovesComments />
            </WhiteView>

            <RestoFriends />
          </ScrollView>
        </WhiteView>
      </SafeAreaView>
    </>
  );
};

const WhiteView = props => {
  return (
    <View style={{backgroundColor: 'white'}} {...props}>
      {props.children}
    </View>
  );
};
const SearchBar = () => {
  const placeholder = 'Find a resturant...';
  const styles = StyleSheet.create({
    container: {
      borderRadius: 6,
      borderColor: '#eaeaea',
      paddingVertical: 0,
      paddingHorizontal: 8,
      marginVertical: 8,
      alignItems: 'center',
      borderWidth: 1,
      flexDirection: 'row',
      marginHorizontal: CommonHorizontalMargin,
    },
    input: {
      color: GlobalColors.light,
      fontSize: 16,
      fontFamily: Fonts.semibold,
      height: 40,
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
      marginTop: 32,
      marginHorizontal: CommonHorizontalMargin,
    },
    textColumn: {
      // backgroundColor: '#171',
      marginLeft: 16,
      flex: 1,
    },
    name: {
      ...TextStyles.titleDark,
      // backgroundColor: '#241',
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
      // minWidth: 100,
      // maxWidth: 120,
      alignItems: 'center',
      marginLeft: 'auto',
      justifyContent: 'space-evenly',
    },
  });
  return (
    <View style={styles.container}>
      <Avatar uri={profilePic} size={52} />
      <View style={styles.textColumn}>
        <SingleLineText style={styles.name}>{name}</SingleLineText>
        <SingleLineText style={styles.rated}>{rated}</SingleLineText>
        <View style={styles.postedAtRow}>
          <Icon icon={Icons.clock} size={18} />
          <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
      </View>
      <View style={styles.ratingColumn}>
        <Rating value={5} theme={Theme.light} />
        <SingleLineText style={TextStyles.subtitleDarkRed}>
          Outstanding !
        </SingleLineText>
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
      elevation: 16, //Android Only
      borderRadius: 100, //Android Only
      shadowColor: GlobalColors.darkRed, //Android Only
      height: 300,
      flexDirection: 'column-reverse',
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
      width: '100%',
      height: '100%',
      position: 'absolute',
      borderRadius: 10,
    },
    resturantCard: {
      backgroundColor: 'white',
      borderRadius: 4,
      padding: 24,
      marginHorizontal: 24,
      marginBottom: 30,
      alignSelf: 'flex-start',
    },
    resturantNameContainer: {
      width: '100%',
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
          <SingleLineText style={TextStyles.titleDark}>
            {resturantName}
          </SingleLineText>
          <Icon icon={Icons.arrowDown} size={10} style={styles.dropDownIcon} />
        </View>
        <SingleLineText style={styles.resturantAddress}>
          {resturantAddress}
        </SingleLineText>
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
  const [data, setData] = useState([
    'Michael Korwin',
    'Shawn Michael',
    'Robert Kane',
    'Alexander Adrian Augustus',
  ]);
  const styles = StyleSheet.create({
    container: {
      height: 350,
      paddingVertical: 32,
      backgroundColor: GlobalColors.backgroundGrey,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    restoFriends: {
      ...TextStyles.titleDark,
    },
    viewAll: {
      ...TextStyles.subtitleDarkRed,
    },
    list: {
      // paddingTop: 24,
      // backgroundColor: '#412',
      // marginHorizontal: 8,
    },
    listContentContainer: {
      paddingHorizontal: 24,
      paddingTop: 24,

      // backgroundColor: '#151',
    },
  });

  const removeItem = index => {
    console.log(`removeItem: ${index}`);
    const newData = [...data];
    newData.splice(index, 1);
    console.log(`newData: ${newData}`);

    setData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restoFriends}>RestoFriends</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({item, index}) => (
          <FriendCard
            uri={profilePic}
            name={item}
            itemIndex={index}
            onRemovePress={removeItem}
          />
        )}
        keyExtractor={(_, index) => index}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{width: 24}} />}
      />
    </View>
  );
};
