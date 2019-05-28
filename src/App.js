import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Header from './Components/Common/Header';
import Shop from './Components/Pages/Shop';
import DetailPage from './Components/Pages/DetailPage';
import ScrollToTop from './Components/Common/ScrollToTop';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Provider store={ store }>
          <Router>  
              <ScrollToTop>
                <Route exact path="/" component={Shop} />
                <Route exact path="/detail" component={DetailPage} />
              </ScrollToTop>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
