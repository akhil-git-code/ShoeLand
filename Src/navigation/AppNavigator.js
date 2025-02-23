import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs'; 

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    {/* MainTabs (Bottom Tabs) is the initial screen */}
    <Stack.Screen 
      name="MainApp" 
      component={BottomTabs} 
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
