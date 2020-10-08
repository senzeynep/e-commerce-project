import React from "react";
import Card from "./product/Card";
import Nav from "./Components/Nav";
import About from "./Components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./products/index"



function App() {
  return (
    <div>
    
      <Router>
        <Route path="/" component={Nav} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />

      </Router>
      
      
  <div className="viewProducts"></div>
  <Card />
    </div>
  );
}

export default App;


