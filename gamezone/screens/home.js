import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globals';

export default function Home({ navigation }) {
  // Mock data
  const [reviews, setReviews] = useState([
    {
      title: 'Avengers: Endgame',
      rating: 5,
      body:
        "Exciting, entertaining, and emotionally impactful, Avengers: Endgame does whatever it takes to deliver a satisfying finale to Marvel's epic Infinity Saga.",
      key: '1',
    },
    {
      title: 'Avengers: Infinity War',
      rating: 4,
      body:
        'Avengers: Infinity War ably juggles a dizzying array of MCU heroes in the fight against their gravest threat yet, and the result is a thrilling, emotionally resonant blockbuster that (mostly) realizes its gargantuan ambitions.',
      key: '2',
    },
    {
      title: 'Avengers: Age of Ultron',
      rating: 3,
      body:
        "Exuberant and eye-popping, Avengers: Age of Ultron serves as an overstuffed but mostly satisfying sequel, reuniting its predecessor's unwieldy cast with a few new additions and a worthy foe.",
      key: '3',
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
