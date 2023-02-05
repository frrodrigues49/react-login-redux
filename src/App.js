import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Reducers from './Reducers';

import Home from './pages/Home';
import {Login} from './pages/Login';
import Sobre from './pages/Sobre';

const store = createStore(Reducers);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/sobre" component={Sobre}/>
          </div>
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;

