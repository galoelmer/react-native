import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
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
    {
      key: '4',
      text: 'Lorem ipsum dolor sit',
    },
    {
      key: '5',
      text: 'Fugiat veniam minus',
    },
    {
      key: '6',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      key: '7',
      text: 'Lorem, ipsum dolor',
    },
    {
      key: '8',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      key: '9',
      text: 'Lorem ipsum dolor sit amet consectetus',
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {todos.length ? (
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            ) : (
              <Text style={styles.noTodosItem}> Todo's list is empty </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  content: {
    padding: 40,
    paddingBottom: 10,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  noTodosItem: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 80,
    color: '#b8bec5',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: '#fff',
    textShadowRadius: 2,
  },
});
