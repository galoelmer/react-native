import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/globals';
import Card from '../shared/Card';
import BackgroundContainer from '../shared/Background';

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;

  return (
    <BackgroundContainer>
      <View style={globalStyles.container}>
        <Card>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardBody}>{body}</Text>
          <View style={styles.rating}>
            <Text style={styles.textColor}>Movie rating: </Text>
            <Image source={images.ratings[rating]} />
          </View>
        </Card>
      </View>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  textColor: {
    color: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 16,
    color: '#fff',
  },
  cardBody: {
    color: '#fff',
    letterSpacing: 1,
    lineHeight: 22,
    padding: 5
    ,
  },
});
