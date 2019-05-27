import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Common/Header';
import Shop from './Components/Pages/Shop';
import DetailPage from './Components/Pages/DetailPage';

function App() {
  return (
    <div>
      <Header />
      <Router>
          <Route exact path="/" component={Shop} />
          <Route exact path="/detail" component={DetailPage} />
      </Router>
    </div>
  );
}

export default App;
