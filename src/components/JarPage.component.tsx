import React from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';
import { NavigationProps } from 'src/interfaces/NavigationProps.interface';

import PushNotification from 'react-native-push-notification';

class JarPage extends React.Component<NavigationProps, JarState> {
    constructor(props: NavigationProps) {
        super(props);
        this.state = {
            jarTotal: 0.0,
            jarDestination: 'Test Organization',
            jarReason: 'I keep swearing.'
        };

        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
              console.log("TOKEN:", token);
            },
           
            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification: any) {
              console.log("NOTIFICATION:", notification);
              Alert.alert(notification.title, notification.message);
            },
           
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },

            popInitialNotification: true,
           
            requestPermissions: Platform.OS === 'ios',
          });
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
                onPress={() => this.payOut()}
                testID="empty-jar"
            />
            <Button
                title="View History"
                onPress={ () => { this.props.navigation.navigate('History');}}
                testID="history-button"
            />
        </View>)
    }

    payOut = () => {
        console.log('here')
        PushNotification.localNotification({
            title: "Swear Jar Cashed in",
            message: `${this.state.jarTotal} sent to ${this.state.jarDestination}`
        });

        this.setState({jarTotal: 0.0});
    }

    pushFuture = () => {
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            message: "My Notification Message", // (required)
            date: new Date(Date.now() + 60 * 1000), // in 60 secs
          });
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