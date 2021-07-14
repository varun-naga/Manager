import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers/index";
import RouterComponent from "./src/Router";
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyD9nXMGfO08jKAl89nm0FB2hEoO8fo4Qw0",
      authDomain: "manager-aae57.firebaseapp.com",
      projectId: "manager-aae57",
      storageBucket: "manager-aae57.appspot.com",
      messagingSenderId: "221751422911",
      appId: "1:221751422911:web:3e83950745efadbd9ffb0a",
      measurementId: "G-7K97TBJKWB"
    };
    firebase.initializeApp(config)
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent/>
      </Provider>
    );
  }
}
export default App;
