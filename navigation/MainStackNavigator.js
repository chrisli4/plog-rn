import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { IconButton } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ChartScreen from '../screens/ChartScreen';
import theme from '../config/theme';

const TabStack = createMaterialTopTabNavigator(
  {
    Records: {
      screen: TaskScreen,
    },
    Photos: {
      screen: PhotoScreen,
    },
    Charts: {
      screen: ChartScreen,
    },
  },
  {
    optimizationsEnabled: true,
    tabBarOptions: {
      activeTintColor: theme.colors.white,
      labelStyle: {
        fontWeight: 'bold',
      },
      tabStyle: {
        backgroundColor: theme.colors.primary,
      },
    },
  }
);

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: 'Plants',
        headerStyle: {
          backgroundColor: theme.colors.primary,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: theme.colors.white,
        },
      }),
    },
    Tabs: {
      screen: TabStack,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <IconButton
            icon="arrow-back"
            color={theme.colors.white}
            onPress={() => navigation.goBack()}
          />
        ),
        headerTitle: navigation.getParam('title', 'My Plant'),
        headerStyle: {
          backgroundColor: theme.colors.primary,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: theme.colors.white,
        },
      }),
    },
  },
  {
    cardStyle: {
      backgroundColor: theme.colors.background,
    },
  }
);

export default MainStack;
