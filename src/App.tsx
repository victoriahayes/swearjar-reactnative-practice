import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { JarPage } from './components/JarPage.component';

export class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <JarPage/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F0F2F2',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '#122F3D',
    textAlign: 'center'
  }
});
