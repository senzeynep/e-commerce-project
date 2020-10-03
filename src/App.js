import React from "react";
import Product from "./product";
import productsList from "./product/productsList";
import Nav from "./Components/Nav";
import About from "./Components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import db from "./firebaseConfig";


function createProduct(product) {
  console.log(product)
  return (
    <>
       
      <Product
        key={product.id}
        id={product.id}
        image={product.imageOfProduct}
        name={product.nameofProduct}
        description={product.descriptionOfProduct}
      />
    </>
  );
}

function App() {
  return (
    <div>
    
      <Router>
        <Route path="/" component={Nav} />
        <Route path="/about" component={About} />
      </Router>

      <h1>
        <span>Products</span>
      </h1>
      <div className="viewProducts">{productsList.map(createProduct)}</div>
    </div>
  );
}

export default App;


