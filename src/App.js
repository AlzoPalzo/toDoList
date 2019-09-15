import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Hompage from './components/homepage';
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path ="/" component={Hompage} />
      </div>
    </Router>
  );
}

export default App;
