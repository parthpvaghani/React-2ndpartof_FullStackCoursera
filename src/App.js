import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';

class App extends Component {



  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

}

export default App;
