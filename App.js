import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={require('@expo/snack-static/react-native-logo.png')}
      />


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
    profile: {
      width: 50,
      height: 50,
  },
}:}
