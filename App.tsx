import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.liu}>la anh quan dep trai</Text>
      </View>
      <Text>Hello world la anh quan </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  liu: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
