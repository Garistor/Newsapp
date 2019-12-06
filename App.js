import React from 'react';
import MainTabNavigator from './navigation/MainTabNavigator';
import { Provider } from 'react-redux'
import Store from './store/configureStore'

class App extends React.Component {

  render() {
    return (
      <Provider store={Store}>
        <MainTabNavigator/>
      </Provider>
    );
  }
}

export default App;
