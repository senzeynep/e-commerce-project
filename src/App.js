import React from "react";
import Product from "./product";
import productsList from "./product/productsList";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Firestore


function createProduct(product) {
  console.log(product)
  return (
    <Nav
    <Router>
      <Route path="/" component={Nav} />
      <Route path="/about" component={About} />
    </Router>
    />
    <Product
      key={product.id}
      id={product.id}
      image={product.imageOfProduct}
      name={product.nameofProduct}
      description={product.descriptionOfProduct}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Products</span>
      </h1>
      <div className="viewProducts">{productsList.map(createProduct)}</div>
    </div>
  );
}

export default App;

// stateleri like-dislike gerialma?
// stock negatife inmemeli
// Product-products? function app dışında map'i nasıl kullanabiliriz (düzenli kod açısından)
