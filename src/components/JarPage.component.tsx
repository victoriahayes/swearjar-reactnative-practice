import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class JarPage extends React.Component<any, JarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            jarTotal: 0.0,
            jarDestination: 'Test Organization',
            jarReason: 'I keep swearing.'
        };
    }

    render() {
        return (<View>
            <Button title="Add to Jar"
                testID="add-to-jar"
                onPress={() => { this.setState({jarTotal: (this.state.jarTotal + .5)});}}
            />
            <Text style={styles.textStyle}>
                <Text style={styles.mainText} testID="jar-total"> {'$' + this.state.jarTotal?.toFixed(2) + '\n'}</Text>
            is going to {'\n'}
                <Text style={styles.subHeader } testID="jar-destination"> { this.state.jarDestination + '\n'} </Text>
            because{'\n'}
                <Text style={styles.subHeader} testID="jar-reason"> { this.state.jarReason }</Text>
            </Text>
            <Button title="Pay out"
                onPress={() => {this.setState({jarTotal: 0.0});}}
                testID="empty-jar"
            />
            <Button
                title="View History"
                onPress={ () => {}}
                testID="history-button"
            />
        </View>)
    }
}

interface JarState {
    jarTotal: number,
    jarDestination: string,
    jarReason: string
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center'
    },
    mainText: {
        fontSize: 42
    },
    subHeader: {
        fontSize: 30
    }
})

export { JarPage };