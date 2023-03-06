import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import HomeScreen from './app/screens/HomeScreen';
import BMICalculationScreen from './app/screens/BMICalculationScreen';
import ResultScreen from './app/screens/ResultScreen';
import SportScreen from './app/screens/SportScreen';
import GraphScreen from './app/screens/GraphScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BMICalculationScreen" component={BMICalculationScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
        <Stack.Screen name="SportScreen" component={SportScreen} />
        <Stack.Screen name="GraphScreen" component={GraphScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)
