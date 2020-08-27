import React from 'react';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: '#003049',
    height: 90,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
    Nunito_Bold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'MovieZone',
            }}
          />
          <Stack.Screen
            name="Details"
            component={ReviewDetails}
            options={{ title: 'Review Details' }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }
}
