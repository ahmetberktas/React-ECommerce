import React, { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Checkout = () => {
  const { basket, addToBasket } = useContext(BasketContext);
  return (
    <div className="container">
      <div className="d-flex flex-column gap-5">
        {basket.map((product) => (
          <div className="d-flex justify-content-between gap-3 align-items-center">
            <div>
              <img
                className="rounded object-fit-contain shadow"
                width={100}
                height={100}
                src={product.image}
              ></img>
            </div>
            <h4 className="text-truncate">{product.title}</h4>
            <h3 className="text-success">$ {product.price}</h3>
            <div className="d-flex gap-3">
              <button className="btn btn-danger">-</button>
              <p className="mt-3">0</p>
              <button onClick={() => addToBasket(product)} className="btn btn-success">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
