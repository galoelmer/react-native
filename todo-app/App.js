import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

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

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text, key: Math.floor(Math.random() * 100).toString() },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert('Invalid TODO', 'Todos must be over 3 chars long', [
        { text: 'OK' },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
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
