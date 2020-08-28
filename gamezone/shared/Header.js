import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  const logo = Image.resolveAssetSource(require('../assets/logo.png'));
  logo.width = 26;
  logo.height = 26;

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        color="white"
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
    marginLeft: 10,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row',
  },
});
