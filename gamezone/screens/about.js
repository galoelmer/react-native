import React from 'react';
import Header from '../shared/Header';
import { StyleSheet, Text, View } from 'react-native';

export default function About({ navigation }) {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header style={styles.header} navigation={navigation} title="About" />
      </View>
      <Text style={styles.content}>About Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#003049',
    height: 90,
    paddingTop: 20,
    paddingLeft: 10,
  },
  content: {
    padding: 30,
  },
});
