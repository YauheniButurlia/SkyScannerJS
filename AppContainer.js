import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Home} from './Home';
import Details from './Details';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Details: {screen: Details}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
