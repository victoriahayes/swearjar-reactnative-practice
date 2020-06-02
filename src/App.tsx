import 'react-native-gesture-handler';
import {JarPage} from './components/JarPage.component';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HistoryPage} from './components/HistoryPage.component';

const AppNavigator = createStackNavigator(
  {
    Home: JarPage,
    History: HistoryPage,
  },
  {initialRouteName: 'Home'},
);

export const AppContainer = createAppContainer(AppNavigator);
