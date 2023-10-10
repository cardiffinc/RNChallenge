
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './src/screens/SearchScreen';

Amplify.configure(awsconfig);
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarIconStyle: { display: "none" }, tabBarLabelPosition: 'beside-icon'}}>
        <Tab.Screen name="Zeller" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
