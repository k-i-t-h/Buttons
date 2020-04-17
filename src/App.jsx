import React from 'react';  
import TopNav from "./Components/TopNav/TopNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import CardDeck from "./Components/CardDeck/CardDeck";
import "./App.css";



/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronCircleRight, faChevronCircleLeft);

function App() {
  return (
    <main className="app">
    <Router>
     <TopNav />
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/card-deck" exact component={CardDeck}/>
        <Route path="/contact-us" exact component={ContactUs}/>
      </Switch>
    </Router>
    </main>
  );
}

export default App;
