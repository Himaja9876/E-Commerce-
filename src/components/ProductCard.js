import React from "react";

const ProductCard = (props) => {

  const { itemData } = props;
  const { title, images, description, price, rating } = itemData;


  return (
    <div className="cards" >
      <img className="card-img"
        alt="card-images"
        src={images[0]} />
      <h5>{title}</h5>
      <h5>{description}</h5>
      <h5>Price: ${price}</h5>
      <h5>Rating: {rating}</h5>
      <button>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;