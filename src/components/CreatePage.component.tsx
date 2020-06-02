import React from 'react';
import {SwearJarRequest} from '../interfaces/SwearJarModel.interface.component';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';
import {CreatePageState} from 'src/interfaces/ApplicationState.interface';
import {ModalProps} from 'src/interfaces/NavigationProps.interface';

export class CreatePage extends React.Component<ModalProps, CreatePageState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      jarReason: 'Say a swear word',
      jarIncrementer: '0.50',
      jarDestination: 'The Developers of this app.',
    };
  }

  render() {
    return (
      <View style={this.styles.pageLayout}>
        <View style={this.styles.subView}>
          <Text style={this.styles.titleText}>Every time I... </Text>
          <TextInput
            style={this.styles.inputText}
            defaultValue={this.state.jarReason}
            onChangeText={input => {
              this.setState({jarReason: input});
            }}
            multiline
            returnKeyType="next"
          />
        </View>
        <View style={this.styles.horizontalLayout}>
          <Text style={this.styles.titleText}>I will add $ </Text>
          <TextInput
            style={this.styles.inputText}
            defaultValue={this.state.jarIncrementer.toString()}
            onEndEditing={e => {
              let inputAsNumber = parseFloat(e.nativeEvent.text);
              if (!inputAsNumber) {
                inputAsNumber = 0;
              }
              const incrementerAsString = inputAsNumber.toFixed(2);
              this.setState({jarIncrementer: incrementerAsString});
            }}
            keyboardType="decimal-pad"
            returnKeyType="next"
          />
          <Text style={this.styles.titleText}> to the jar.</Text>
        </View>
        <View style={this.styles.subView}>
          <Text style={this.styles.titleText}>This money will go to...</Text>
          <TextInput
            style={this.styles.inputText}
            defaultValue={this.state.jarDestination}
            onChangeText={input => {
              this.setState({jarDestination: input});
            }}
            returnKeyType="done"
          />
        </View>
        <View style={this.styles.buttonStyle}>
          <Button
            title="Submit"
            onPress={() => this.props.closeAction(this.state)}
            testID="save jar"
          />
        </View>
      </View>
    );
  }

  saveSwearJar() {
    const swearJarRequest: SwearJarRequest = {
      name: this.state.jarReason,
      incrementer: parseFloat(this.state.jarIncrementer),
    };
  }

  styles = StyleSheet.create({
    horizontalLayout: {
      flexDirection: 'row',
      padding: 10,
    },
    pageLayout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    subView: {
      padding: 10,
    },
    inputText: {
      textAlignVertical: 'top',
      alignContent: 'center',
      fontSize: 22,
    },
    titleText: {
      fontWeight: 'bold',
      textAlignVertical: 'center',
      fontSize: 24,
    },
    buttonStyle: {
      flex: 1,
      alignItems: 'stretch',
      alignSelf: 'stretch',
      fontSize: 24,
    },
  });
}
