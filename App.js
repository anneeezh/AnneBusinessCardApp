import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={{uri:'https://user-images.githubusercontent.com/78512537/107577246-0d31a580-6ba7-11eb-800f-a7758b6bdf6f.jpg'}}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>
      <Button
        title="Personal Website"
        color="8fbc8f"
        onPress={() => Alert.alert('Button with adjusted color pressedm')}
       />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile:{
    width:160,
    height: 125,
    alignContent:'center',
    resizeMode: 'stretch',
  },
  button:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
})  