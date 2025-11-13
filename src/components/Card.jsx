import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.company}</h5>
        <h3>Color:{props.color}</h3>
        <h3>Price:{props.price}</h3>
        <a href="#" className="btn btn-primary">
          Buy Now!
        </a>
      </div>
    </div>
  );
};

export default Card;
