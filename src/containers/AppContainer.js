import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Details from '../screens/Details';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Details: {screen: Details}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
