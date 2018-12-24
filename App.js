import React from "react";
import { Provider } from "react-redux";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon, FileSystem } from "expo";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./config/store";
import NavigationService from "./config/NavigationService";
import AppNavigator from "./navigation/AppNavigator";
import { setCurrentScreen } from './actions/screen';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    const { store, persistor } = configureStore();
    this.state = {
      store,
      persistor,
      isLoadingComplete: false,
    };
  }

 _getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return this._getActiveRouteName(route);
  }
  return route.routeName;
}

  render() {
    const { store, persistor, isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <PaperProvider theme={DefaultTheme}>
            <PersistGate loading={null} persistor={persistor}>
              <View style={styles.container}>
                {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                <AppNavigator
                  onNavigationStateChange={(prevState, currentState) => {
                    const currentScreen = this._getActiveRouteName(currentState);
                    const prevScreen = this._getActiveRouteName(prevState);

                    if (prevScreen !== currentScreen) {
                      store.dispatch(setCurrentScreen(currentScreen));
                  }}
                }
                  ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                  }}
                />
              </View>
            </PersistGate>
          </PaperProvider>
        </Provider>
      );
    }
  }

  isDir = async () => {
      const path = `${FileSystem.documentDirectory}plog/`;
      const { isDirectory } = await FileSystem.getInfoAsync(path);
      if (isDirectory) {
        return isDirectory;
      } else {
        const result = await FileSystem.makeDirectoryAsync(path);
        return result;
      }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png"),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.MaterialIcons.font,
        ...Icon.FontAwesome.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      }),
      this.isDir(),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
