import React, { Component } from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from './ducks';
import Root from './Root';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };
  
  render() {
    const rootReducer = combineReducers(reducers);
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
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
          <Root />
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
      ]),
      await Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
      }),
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
