import React from 'react';
import Header from '../shared/Header';
import Card from '../shared/Card';
import BackgroundContainer from '../shared/Background';
import { StyleSheet, Text, View } from 'react-native';

export default function About({ navigation }) {
  return (
    <BackgroundContainer>
      <View style={styles.headerContainer}>
        <Header style={styles.header} navigation={navigation} title="About" />
      </View>
      <Card>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          facere obcaecati placeat nostrum odio repellendus sunt dicta illo
          ipsam debitis iusto molestiae porro rerum beatae quasi, laborum
          ducimus, molestias modi iure eius! Quae sint doloremque, eius saepe
          odio eos commodi voluptates corrupti soluta dignissimos? Sint qui
          iusto et consectetur commodi.
        </Text>
      </Card>
    </BackgroundContainer>
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
    padding: 10,
    color: '#fff',
    lineHeight: 25,
    letterSpacing: 1,
    fontSize: 14,
    textAlign: 'justify',
  },
});
