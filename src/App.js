import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Header from './Components/Common/Header';
import Shop from './Components/Pages/Shop';
import ScrollToTop from './Components/Common/ScrollToTop';
import DetailPage from './Components/Pages/DetailPage';
import Footer from './Components/Common/Footer';

class App extends Component {
  render(){
    return (
      <div>
        <Provider store={ store }>
          <Router>  
              <Header />
              <ScrollToTop>
                <Route exact path="/" component={Shop} />
                <Route exact path="/detail" component={DetailPage} />
              </ScrollToTop>
              <Footer />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
