import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';

export default function Background(props) {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
