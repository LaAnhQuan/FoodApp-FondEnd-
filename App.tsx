import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [name, setName] = useState<string>("hello");

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.liu}>{name}</Text>
        <TextInput
          onChangeText={a => setName(a)}
          value={name}
          autoCapitalize='none'
          autoCorrect={false}
          // keyboardType='numeric'
          //maxLength={2}
          multiline
          style={{
            borderColor: "violet",
            borderWidth: 1,
            padding: 10
          }} />
      </View>

      <Button title='Add new ' />
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
