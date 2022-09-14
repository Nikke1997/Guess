import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useEffect, useState } from 'react';

let counter;
let number;

export default function App() {
const [guess, setQuess] = useState('');
const [text, setText] = useState('');

const over = () => {
setText('Guess a number between 1-100')
console.log(number);
number = Math.floor(Math.random() * 101);
counter = 0;
}

useEffect(() => {
over();

}, [])

const math = () => {
if(number < guess) {
  setText('Your number is too high')
  counter++
  } 
  else if(number > guess) {
  setText('Your number is too low')
  counter++
  }
  else {
    counter++
    Alert.alert(`You quessed the number in ${counter} quesses`);
    over();
  }


}










  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style={styles.textbox} keyboardType='number-pad'
      onChangeText={setQuess}
      ></TextInput>
      <View style={styles.button}>
<Button title="Make a quess" onPress={math}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    borderColor: 'black',
width: '50%',
borderWidth: 1,
margin: 10
},
button: {
width: '20%',
borderColor: 'black',
borderWidth: 1,
margin: 10
}

});
