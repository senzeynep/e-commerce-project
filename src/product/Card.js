import React, { useState, useEffect } from "react";
import db from '../firebaseConfig';

const Card = ()=>{

    const fetchData = async () => {
        console.log("Hello")
        const res = await db.collection('products').doc('bag2').get()
        console.log(res)
        const data = res.data()
        console.log(data);
        setImage(data.image)
        setName(data.name)
        setDescription(data.description)
    }

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        fetchData()
      },[name])

    const [amountProduct, setAmountProduct] = React.useState(10);

  const [like, setLike] = React.useState(0);

  const [dislike, setDislike] = React.useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };
  const handleDislike = () => {
    setDislike(dislike + 1);
  };

  const handleClick = () => {
    if (amountProduct <= 0){
      document.getElementById('AddToCart').disabled = true
      document.getElementById('StockMessage').innerHTML = "Out of Stock"
      return
    }
    setAmountProduct(amountProduct - 1);
  };

  return (
    <>
      <img width="200" height="auto" alt="the product" src={image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <button id='AddToCart' onClick={handleClick}>Add to Cart</button>
        <span id='StockMessage'>Last {amountProduct} item.</span>
      </div>
      <div>
        <button onClick={handleLike}>Like</button>
        <span>{like} people liked this.</span>
      </div>
      <div>
        <button onClick={handleDislike}>Dislike</button>
        <span>{dislike} people disliked this.</span>
      </div>
    </>
  );
};
export default Card;