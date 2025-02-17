import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [name, setName] = useState<string>("hello");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Neflix" },
    { id: 4, title: "Chill" },
    { id: 5, title: "And" },
    { id: 6, title: "Free" },
    { id: 7, title: "LQ" }

  ])

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

      <Button title='Add new '
        onPress={() => alert("Tap me")}
      />
      <View style={{ marginTop: 20 }}>
        {todoList.map(todo => {
          return (
            <Text style={styles.todo}>{todo.title}</Text>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 10,
    padding: 15

  },
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
    marginTop: 50

  },
});
