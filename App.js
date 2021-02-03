import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducer from './Store/reducer';
const store = createStore(reducer)

import Navigation from './Navigation/Navigation';
import Menu from './Views/Menu'

export default function App() {
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
