import React from "react";

const Card = ({ cocktail }) => {
  const { strDrink, strDrinkThumb } = cocktail;
  return (
    <div className="card w-100 bg-base-100 shadow-xl" data-aos="zoom-out">
      <figure>
        <img src={strDrinkThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {strDrink}!<div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Details</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
