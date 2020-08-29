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
import { string, object, number } from 'yup';

// Validation schema
let movieSchema = object({
  title: string()
    .required('Required')
    .min(3, 'Must be more than 3 characters')
    .max(25, 'Must be 25 characters or less'),
  body: string()
    .required('Required')
    .min(5, 'Must be more than 5 characters')
    .max(200, 'Must be 200 characters or less'),
  rating: number()
    .positive()
    .integer()
    .required('Required')
    .test('is-1-5', 'Only numbers between 1 through 5', (value) => {
      return /[1-5]/.test(value);
    }),
});

export default function reviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={movieSchema}
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
                  onBlur={props.handleBlur('title')}
                  onChangeText={props.handleChange('title')}
                  value={props.values.title}
                />
                <Text style={styles.error}>
                  {props.touched.title && props.errors.title}
                </Text>

                <TextInput
                  multiline
                  type="text"
                  name="body"
                  style={globalStyles.input}
                  placeholder="Review content"
                  onBlur={props.handleBlur('body')}
                  onChangeText={props.handleChange('body')}
                  value={props.values.body}
                />
                <Text style={styles.error}>
                  {props.touched.body && props.errors.body}
                </Text>

                <TextInput
                  type="number"
                  name="rating"
                  style={globalStyles.input}
                  placeholder="Rating (1-5)"
                  onBlur={props.handleBlur('rating')}
                  onChangeText={props.handleChange('rating')}
                  value={props.values.rating}
                  keyboardType="number-pad"
                />
                <Text style={styles.error}>
                  {props.touched.rating && props.errors.rating}
                </Text>

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
