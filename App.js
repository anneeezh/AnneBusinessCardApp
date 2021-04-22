import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={{uri:'https://user-images.githubusercontent.com/78512537/107577246-0d31a580-6ba7-11eb-800f-a7758b6bdf6f.jpg'}}
      />
      <Text style={styles.name}>Anne Zheng</Text>
      <Text style={styles.email}>sdzhaj@gmail.com</Text>
      <Button 
        title="Personal Website"
        color="#8fbc8f"
        onPress={() => {
          Linking.openURL('https://anneeezh.weebly.com/')
          .catch(err => {
              console.error("Failed opening page because: ", err)
              alert('Failed to open page')
          })}}
      />
      <Text style={styles.question}>Why did you want to learn mobile app development?</Text>
      <Text style={styles.answer}>I wanted to learn mobile app development because I am curious about the process of developing an app. This is the project that catches my eyes the most while we are choosing major projects. I've always always been curious about how our social apps, shopping apps, music apps were made, or developed.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'center',
    fontFamily:"Georgia",
    padding: 20
  },
  profile:{
    width:165,
    height: 125,
    alignContent:'center',
    resizeMode: 'stretch',
  },
  name:{
    fontSize: 30,
    fontWeight: "bold"
  },
  email:{
    fontSize: 15,
    fontWeight: "400"
  },
  question:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:'center'
  },
  answer:{
    fontSize:18,
    fontWeight:"500",
    alignContent:'center'
  }
})  