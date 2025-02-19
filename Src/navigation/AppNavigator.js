import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';  // Import your BottomTabs component

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    {/* MainTabs (Bottom Tabs) is the initial screen */}
    <Stack.Screen 
      name="MainTabs" 
      component={BottomTabs} 
      options={{ headerShown: false }}  // Hide the header for bottom tabs screen
    />
  </Stack.Navigator>
);

export default AppNavigator;
