import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Details from './Details';
import About from './About';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Details: {screen: Details},
  About: {screen: About}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
