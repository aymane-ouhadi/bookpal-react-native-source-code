import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../../screens/Home/Home';
import Favorites from '../../screens/Favorites/Favorites';
import ReadLater from '../../screens/ReadLater/ReadLater';
import Search from '../../screens/Search/Search';
import bottomTabNavigatorStyle from './bottomTabNavigatorStyle';
import { THEME_SECONDARY } from '../../utils/constants/colors';
import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({ 
        tabBarStyle: bottomTabNavigatorStyle.bottomTab,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch(route.name){
            case 'Home':
              return <AntDesign name='home' size={size} color={focused ? THEME_SECONDARY : color} />;
            case 'Favorites':
              return <AntDesign name='hearto' size={size} color={focused ? THEME_SECONDARY : color} />;
            case 'ReadLater':
              return <AntDesign name='clockcircleo' size={size} color={focused ? THEME_SECONDARY : color} />;
            case 'Search':
              return <AntDesign name='search1' size={size} color={focused ? THEME_SECONDARY : color} />;
          }

          return <AntDesign name={iconName} size={size} color={focused ? THEME_SECONDARY : color} />;

        },
      })}
    >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ 
            header: () => <Header/>,
          }}
      />
        <Tab.Screen
          name='Favorites'
          component={Favorites}
          options={{ 
            header: () => <Header/>,
          }}
        />
        <Tab.Screen
          name='Search'
          component={Search}
          options={{ 
            header: () => null,
          }}
        />
        <Tab.Screen
          name='ReadLater'
          component={ReadLater}
          options={{ 
            header: () => <Header/>,
          }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator