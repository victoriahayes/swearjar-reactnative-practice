import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProps } from 'src/interfaces/NavigationProps.interface';

class JarPage extends React.Component<NavigationProps, JarState> {
    constructor(props: NavigationProps) {
        super(props);
        this.state = {
            jarTotal: 0.0,
            jarDestination: 'Test Organization',
            jarReason: 'I keep swearing.',
            jarIncrementer: 0.5
        };
    }

    render() {
        return (<View>
            <Button title="Add to Jar"
                testID="add-to-jar"
                onPress={() => { this.setState({jarTotal: (this.state.jarTotal + this.state.jarIncrementer)});}}
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
                onPress={ () => { this.props.navigation.navigate('History');}}
                testID="history-button"
            />
            <Button
                title="Create New Jar"
                onPress={ () => { this.props.navigation.navigate('Create');}}
                testID="create-button"
            />
        </View>)
    }
}

interface JarState {
    jarTotal: number,
    jarDestination: string,
    jarReason: string,
    jarIncrementer: number
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