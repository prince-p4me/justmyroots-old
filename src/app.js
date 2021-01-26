/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Root } from "native-base";
import { Provider } from "react-redux";
import store, { persistor } from "./Store/";
import AppNavigator from "./View/Navigation";
import { PersistGate } from "redux-persist/lib/integration/react";
import LoadingIndicator from "./View/Components/LoadingIndicator";

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={<LoadingIndicator />} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
