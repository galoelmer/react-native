import React from 'react';
import HomeScreen from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import About from './screens/about';
import Header from './shared/Header';
import { Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerTitle: () => <Header navigation={navigation} title="MovieZone" />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={ReviewDetails}
      options={{
        title: 'Review Details',
      }}
    />
  </Stack.Navigator>
);

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
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }
}
