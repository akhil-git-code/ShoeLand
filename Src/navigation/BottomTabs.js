// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../Screens/HomeScreen';
// import NotifcationScreen from '../Screens/NotifcationScreen';
// import FacouriteScreen from '../Screens/FacouriteScreen';
// import AddtoCartScreen from '../Screens/AddtoCartScreen';

// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//     screenOptions = {{
// // showLabel:false,
// headerShown: false,
// position: 'absolute',
// bottom: 20,         // Adjust this value to move the tab bar upwards
// left: 20,
// right: 20,
// }}
// tabBarOptions={{
//   // bottom:25,
// // height:40,
//   //  position:'absolute',
//   //  left:20,
//   //  right:20,
//   //  elevation:0,

// }}

// >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Notifications" component={NotifcationScreen} />
//       <Tab.Screen name="Favourite" component={FacouriteScreen} />
//       <Tab.Screen name="AddToCart" component={AddtoCartScreen} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabs;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import FavouriteScreen from '../Screens/FavouriteScreen';
import Notifications from '../Screens/Notifications';
import AddToCart from '../Screens/AddToCart';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIcon: () => null,
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={28} color="black" />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: () => <Ionicons name="heart" size={28} color="black" />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <Ionicons name="notifications" size={28} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="AddToCart"
        component={AddToCart}
        options={{
          tabBarIcon: () => <Ionicons name="cart" size={28} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
