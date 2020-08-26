import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Platform } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (text) => {
    setText(text);
  };

  const handleSubmit = () => {
    submitHandler(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        onChangeText={changeHandler}
        value={text}
      />
      <View style={styles.button}>
        <Button
          title="Add Todo"
          color={Platform.OS === 'ios' ? '#fff' : '#50d0ff'}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    borderRadius: 15,
    ...Platform.select({
      ios: {
        backgroundColor: '#50d0ff',
      },
    }),
  },
});
