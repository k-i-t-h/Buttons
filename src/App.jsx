import React from 'react';  
import TopNav from "./Components/TopNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";

function App() {
  return ( 
    <Router>
     <TopNav />
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact-us" exact component={ContactUs}/>
      </Switch>
    </Router> 
  );
}

export default App;
