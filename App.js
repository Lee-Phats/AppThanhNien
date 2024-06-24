import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MenuBottom from './src/page/components/MenuBottom';
import Header from './src/page/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import StackApp from './src/page/components/StackApp';
// import Login from './src/page/components/Login';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="light" /> */}
        <StackApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
