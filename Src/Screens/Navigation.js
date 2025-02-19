import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import OnBordingScreens from './OnBordingScreens';
import SignUp from './SignUp';
import SignIn from './SignIn'; // Your Login component
import ForgotPassword from './ForgotPassword';
// bottom tabs
import BottomTabs from '../navigation/BottomTabs';
import HomePage from './HomePage';
import FullProductScreen from './FullProductScreen';
import MyProfile from './MyProfile';
import SideMenu from './SideMenu';
import AddToCart from './AddToCart';
import FavouriteScreen from './FavouriteScreen';
import Notifications from './Notifications';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBordingScreens"
          component={OnBordingScreens}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MainApp"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FullProductScreen"
          component={FullProductScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SideMenu"
          component={SideMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddToCart"
          component={AddToCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FavouriteScreen"
          component={FavouriteScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
