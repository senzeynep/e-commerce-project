import React from 'react';
import Product from '../product/Product'
import { useState, useEffect } from "react";
import db from '../firebaseConfig';


const Products = () => {

    const [productData, setProductData] = useState([]);
 

    const fetchData = async () => {
        console.log("Hello")
        const productRes = await db.collection('products').get()

        const fetchProduct = productRes.docs.map((product) => {
            return ({
              id: product.id, ...product.data()
            })});
            console.log(fetchProduct);
          setProductData(fetchProduct);
        };
        
    useEffect(()=>{
        fetchData()
      },[])

    return (
    <div>
        <h1>Products</h1>
        {productData.map(product => 
            <Product name={product.name}
            description={product.description}
            image={product.image}/>
        )}
        
    </div>)
};
export default Products;