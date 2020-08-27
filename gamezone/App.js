import React from 'react';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: '' }}
          />
          <Stack.Screen name="Details" component={ReviewDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
