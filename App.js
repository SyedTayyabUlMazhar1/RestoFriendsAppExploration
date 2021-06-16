import 'react-native-gesture-handler';
import React from 'react';

import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screens from './screens';
import Icons from './src/icons';
import Icon from './src/components/Icon';
import IconFocusable from './src/components/IconFocusable';
import FloatingActionButton from './src/components/FloatingActionButton';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconSize = 24;

            switch (route.name) {
              case Screens.Home.name: {
                return (
                  <IconFocusable
                    icon={Icons.home}
                    size={iconSize}
                    focused={focused}
                  />
                );
              }
              case Screens.Notification.name: {
                return (
                  <IconFocusable
                    icon={Icons.notification}
                    size={iconSize}
                    focused={focused}
                  />
                );
              }
              case Screens.Add.name: {
                return <FloatingActionButton />;
              }
              case Screens.Profile.name: {
                return (
                  <IconFocusable
                    icon={Icons.profile}
                    size={iconSize}
                    focused={focused}
                  />
                );
              }
              case Screens.Search.name: {
                return (
                  <IconFocusable
                    icon={Icons.searchTab}
                    size={iconSize}
                    focused={focused}
                  />
                );
              }
            }
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            // backgroundColor: '#123',
            height: 90,
          },
          safeAreaInsets: {
            bottom: 0,
          },
        }}>
        <Tab.Screen
          name={Screens.Home.name}
          component={Screens.Home.component}
        />
        <Tab.Screen
          name={Screens.Notification.name}
          component={Screens.Notification.component}
        />
        <Tab.Screen name={Screens.Add.name} component={Screens.Add.component} />
        <Tab.Screen
          name={Screens.Profile.name}
          component={Screens.Profile.component}
        />
        <Tab.Screen
          name={Screens.Search.name}
          component={Screens.Search.component}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
