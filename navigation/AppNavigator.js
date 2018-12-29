import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainStackNavigator from './MainStackNavigator';

const SwitchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainStackNavigator,
});

export default createAppContainer(SwitchNavigator);
