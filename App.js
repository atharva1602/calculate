import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import Home from './Screens/Home'


export default function App() {
  return (
    <View style={styles.container}>
  <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

