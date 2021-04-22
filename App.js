import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={uri('https://user-images.githubusercontent.com/78512537/107577246-0d31a580-6ba7-11eb-800f-a7758b6bdf6f.jpg')}
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
    width:200,
    height: 350,
    alignContent:'center',
  }
})  