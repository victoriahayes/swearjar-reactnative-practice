import {
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler'
import { JarPage } from './components/JarPage.component';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HistoryPage} from './components/HistoryPage.component';

const AppNavigator = createStackNavigator(
  {
    Home: JarPage,
    History: HistoryPage
  },
  {initialRouteName: 'Home'}
);

export const AppContainer = createAppContainer(AppNavigator);

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
