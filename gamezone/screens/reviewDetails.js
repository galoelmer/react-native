import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globals';

export default function ReviewDetails({route, navigation}) {
  const {title, body, rating} = route.params;

  return <View style={globalStyles.container}>
    <Text>{title}</Text>
    <Text>{body}</Text>
    <Text>{rating}</Text>
  </View>;
}
