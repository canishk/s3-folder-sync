import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1_AWS from './screens/Screen1_AWS';
import Screen2_Destination from './screens/Screen2_Destination';   // We'll create this next

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ 
            headerShown: false,
            animation: 'slide_from_right'   // nice transition
          }}
        >
          <Stack.Screen name="AWSConfig" component={Screen1_AWS} />
          <Stack.Screen name="S3Destination" component={Screen2_Destination} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}