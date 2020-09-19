import React from "react";
import productsList from "./productsList";

const Product = (props) => {
  //const INITIAL_AMOUNT = 20;
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
      <img width="200" height="auto" src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
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
export default Product;
