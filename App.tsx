import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {


  //data-type 
  //string
  const [name, setName] = useState<string>(" la anh quan");

  //number
  const [age, setAge] = useState<number>(30)

  //null , undefined, boolean : khong hien thi
  const test = null;

  //object, array
  const [person, setPerson] = useState([{
    name: "hoi dan it",
    age: 25
  }])



  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.liu}>{name}</Text>
        <Text style={styles.liu}>{JSON.stringify(person)}</Text>
      </View>
      <Text style={styles.liu}>Hello world la anh
        <Text style={styles.hoidanit}> quan</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hoidanit: {
    fontSize: 30,
    color: "green",
  },
  liu: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,

  },
});
