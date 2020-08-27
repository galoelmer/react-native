import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/globals';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
