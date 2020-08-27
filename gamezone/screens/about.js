import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function About({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>About</Text>
      </View>

      <View style={styles.button}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#003049',
    height: 90,
  },
  headerText: {
    flex: 1,
    color: '#fff',
    paddingLeft: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
  },
  button: {
    marginTop: 30,
    marginHorizontal: 50,
  },
});
