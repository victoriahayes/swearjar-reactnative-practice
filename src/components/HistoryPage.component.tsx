import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

export class HistoryPage extends React.Component {
  render() {
    return (
      <View style={styles}>
        <Text>I've seen some things...</Text>
      </View>
    );
  }
}

const styles: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};
