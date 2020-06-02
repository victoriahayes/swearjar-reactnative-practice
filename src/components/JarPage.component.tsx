import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import { NavigationProps } from 'src/interfaces/NavigationProps.interface';
import { JarPageState, CreatePageState } from 'src/interfaces/ApplicationState.interface';
import { CreatePage } from './CreatePage.component';
import { SwearJarRequest, SwearJarResponse } from 'src/interfaces/SwearJarModel.interface.component';

class JarPage extends React.Component<NavigationProps, JarPageState> {
    constructor(props: NavigationProps) {
        super(props);
        this.state = {
            jarTotal: 0.0,
            jarDestination: 'Test Organization',
            jarReason: 'I keep swearing.',
            jarIncrementer: 0.5,
            modalOpen: false
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
                onPress={ () => { this.setState({modalOpen: true })}}
                testID="create-button"
            />

            <Modal visible={this.state.modalOpen}>
                <CreatePage
                    closeAction = {(jarData: CreatePageState) => { 
                        this.setState({modalOpen: false});
                        this.saveJar(jarData)
                    }}
                />
            </Modal>
        </View>)
    }

    saveJar(jarData: CreatePageState) {
        const request: SwearJarRequest = {
            name: jarData.jarReason,
            incrementer: parseFloat(jarData.jarIncrementer)
        };

        fetch('https://swearjarbackend.azurewebsites.net/swear-jar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }).then((resp) => {
            resp.json();   
        }).then((respBody) => {
            
        });
    }
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