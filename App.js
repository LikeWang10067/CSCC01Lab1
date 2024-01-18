import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList'

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList initialValues={['Have a nice sleep', 'cscc69 Project1', 'cscc63 A2']}/>
      <Text>Start to add your task here!</Text>
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
});
