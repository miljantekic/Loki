import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import RoutedContent from './routing/RoutedContent';
import Header from './Components/Header/Header';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="AppWrapper">
                <Header/>
                <div className="ContentWrapper">
                    <RoutedContent/>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
