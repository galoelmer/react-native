import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';

export default function App() {
  // Mock Todo's data
  const [todos, setTodos] = useState([
    {
      key: ' 1',
      text: 'Delectus aut autem',
    },
    {
      key: '2',
      text: 'Quis ut nam facilis et officia qui',
    },
    {
      key: '3',
      text: 'Fugiat veniam minus',
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
