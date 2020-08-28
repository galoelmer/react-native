import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  ScrollView,
} from 'react-native';
import { globalStyles } from '../styles/globals';
import Card from '../shared/Card';
import BackgroundContainer from '../shared/Background';
import ReviewForm from '../screens/reviewForm';

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

  const [modalVisible, setModalVisible] = useState(false);

  const addReview = (values) => {
    setReviews((currentReviews) => {
      values.key = Math.random().toString();
      return [values, ...currentReviews];
    });
    setModalVisible(false);
  };
  return (
    <BackgroundContainer>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Create Review</Text>
            <TouchableHighlight
              style={{ ...styles.closeButton }}
              underlayColor="#fff"
              activeOpacity={0.5}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textCloseButton}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <ReviewForm addReview={addReview} />
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Home Screen Container*/}
      <View style={globalStyles.container}>
        {/* Add movie Button */}
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Add Movie</Text>
        </TouchableHighlight>

        {/* Movies' List */}
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 75,
  },
  modalView: {
    width: 380,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#1cb995',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: 160,
    alignSelf: 'center',
  },
  closeButton: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  textCloseButton: {
    color: '#E44E59',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 30,
  },
  title: {
    alignSelf: 'flex-start',
    paddingLeft: 40,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -20,
  },
});
