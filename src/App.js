import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {configureStore} from '../src/Redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

class App extends Component {

  render() {  
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
