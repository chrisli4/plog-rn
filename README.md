# Plog
A react-native app used to track and monitor plant growth.

How to use



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

Install node > 8.3 and watchman

```
brew install node
brew install watchman
```

Install React Native CLI
```
npm install -g react-native-cli
```

Install Xcode or Android Studio to run ios/android simulator.

Install the latest version of Expo CLI and mobile client.
```
https://docs.expo.io/versions/latest/introduction/installation
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the project to a directory
```
git clone git@github.com:chrisli4/plog-rn.git
```

Navigate to the project and install dependencies
```
cd plog-rn/
yarn install or npm install
```

Start the local Expo server
```
expo start
```

Run using Xcode or Android simulator, your preference


## Built With

* expo - RN framework containing various services, this application primarily uses the FileSystem and Camera utilities.
* formik - Form input validation
* react-navigation - Handles navigation within the application.
* react-native-paper - Material UI framework.
* react-redux - State-management of the entire application.
* redux-saga - Perform asynchronous actions such as taking a picture.
* redux-persist - Save user data between sessions.
* victory-native - Charting user submitted data.

### Components Used

* react-native-calendars - Calendar component for selecting dates.
* react-native-image-view - Image view used in photo album.

## Authors

* Christopher Li (github.com/chrisl4)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


