/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeModules } from 'react-native';
const { CustomModule } = NativeModules;

const App = () => {
  React.useEffect(() => {
    console.log("add", CustomModule.add(2, 2))
    CustomModule.checkCallback((msg) => {
      console.log(msg)
    })
    CustomModule.checkPromise().then((msg) => {
      console.log(msg)
    })
  }, [])
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.background}>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF',
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
