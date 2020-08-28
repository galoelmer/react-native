import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import { globalStyles } from '../styles/globals';
import { Formik } from 'formik';

export default function reviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          } else if (values.title.length > 30) {
            errors.title = 'Title must not exceed 30 characters';
          }

          if (!values.body) {
            errors.body = 'Required';
          } else if (values.body.length > 400) {
            errors.body = 'Text must not exceed 400 characters';
          }

          if (!values.rating) {
            errors.rating = 'Required';
          } else if (isNaN(Number(values.rating))) {
            errors.rating = 'Must be a number';
          } else if (!/[1-5]/.test(values.rating)) {
            errors.rating = 'Value must be between 1 and 5';
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <KeyboardAvoidingView
            behavior="height"
            style={styles.container}
            keyboardVerticalOffset={10}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <TextInput
                  type="text"
                  name="title"
                  style={globalStyles.input}
                  placeholder="Review title"
                  onChangeText={props.handleChange('title')}
                  value={props.values.title}
                />
                {props.errors.title && props.touched.title && (
                  <Text style={styles.error}>{props.errors.title}</Text>
                )}

                <TextInput
                  multiline
                  type="text"
                  name="body"
                  style={globalStyles.input}
                  placeholder="Review content"
                  onChangeText={props.handleChange('body')}
                  value={props.values.body}
                />
                {props.errors.body && props.touched.body && (
                  <Text style={styles.error}>{props.errors.body}</Text>
                )}

                <TextInput
                  type="number"
                  name="rating"
                  style={globalStyles.input}
                  placeholder="Rating (1-5)"
                  onChangeText={props.handleChange('rating')}
                  value={props.values.rating}
                  keyboardType="number-pad"
                />
                {props.errors.rating && props.touched.rating && (
                  <Text style={styles.error}>{props.errors.rating}</Text>
                )}

                <TouchableHighlight
                  style={styles.submitButton}
                  onPress={props.handleSubmit}
                >
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                    Submit
                  </Text>
                </TouchableHighlight>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    color: '#E44E59',
    padding: 5,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    marginVertical: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
