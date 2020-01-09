import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Hello World.</Text>
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
