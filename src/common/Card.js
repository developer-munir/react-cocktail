import React from "react";

const Card = ({ cocktail }) => {
  const { strDrink, strDrinkThumb } = cocktail;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={strDrinkThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {strDrink}!<div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Details</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;