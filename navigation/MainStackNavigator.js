import {
  createStackNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";
import PhotoScreen from "../screens/PhotoScreen";
import ChartScreen from "../screens/ChartScreen";

const TabStack = createMaterialTopTabNavigator({
  Records: {
    screen: TaskScreen,
  },
  Photos: {
    screen: PhotoScreen,
  },
  Charts: {
    screen: ChartScreen,
  },
});

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerTitle: "Plants",
    }),
  },
  Tabs: {
    screen: TabStack,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam('title', 'My Plant'),
      }),
  },
});

export default MainStack;
