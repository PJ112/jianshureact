import React, { Component } from 'react';
import Header from './common/header/index';
import  { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store';
import Home from './page/home';
import Detail from './page/detail';
class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div>
            <Header/>
            <BrowserRouter>
               <div>
                   <Route path='/' exact component={Home}></Route>
                   <Route path='/detail' exact component={Detail}></Route>
               </div>
            </BrowserRouter>
        </div>
      </Provider>
    )
  }
};

export default App;
