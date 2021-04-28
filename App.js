import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, Linking,TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={{uri:'https://user-images.githubusercontent.com/78512537/116446451-d2d1bf00-a80b-11eb-92f5-bf9bb9ea37d4.png'}}
      />
      <Text style={styles.name}>Anne Zheng</Text>
      <Text style={styles.email}>sdzhaj@gmail.com</Text>
      <Button style={styles.button}
        title="Personal Website"
        color="#8fbc8f"
        onPress={() => {
          Linking.openURL('https://anneeezh.weebly.com/')
          .catch(err => {
              console.error("Failed opening page because: ", err)
              alert('Failed to open page')
          })}}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={ () => {Linking.openURL('https://www.eachoneteachone.is/anne-zheng.html')}
        }>
        <Text style={styles.buttonText}>You Can Also Check Out My E1T1 Website Here</Text>
      </TouchableOpacity>
      <View style={styles.prompt}>
      <ScrollView>
        <Text style={styles.question}>Why did you want to learn mobile app development?</Text>
        <Text style={styles.answer}>I wanted to learn mobile app development because I am curious about the process of developing an app. This is the project that catches my eyes the most while we are choosing major projects. I've always always been curious about how our social apps, shopping apps, music apps were made, or developed.</Text>
      </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    fontFamily:"Georgia",
    padding:15,
  },
  profile:{
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    alignContent:'center',
  },
  name:{
    fontSize: 32,
    fontWeight: "900",
  },
  email:{
    fontSize: 15,
    fontWeight: "400",
    marginBottom:5
  },
  button:{
    padding:6,
  },
  bottonText:{
    fontSize:20
  },
  question:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:'center',
    alignItems:'stretch',
    marginBottom:10,
    margin:10
  },
  answer:{
    fontSize:18,
    fontWeight:"500",
    textAlign:'center',
    alignItems:'stretch',
    margin:10
  },
  prompt:{
    width:335,
    height:320,
    backgroundColor:'#FFF',
  }
})  