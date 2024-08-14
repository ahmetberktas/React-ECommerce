import React, { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);

  return (
    <div className="container">
      <div className="d-flex flex-column gap-5">
        {basket.length === 0 && (
          <p className="text-center my-5">
            <span className="mx-3">Öncelikle Sepete bir ürün ekleyiniz</span>{" "}
            <Link to="/">Ürünler</Link>
          </p>
        )}
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
              <button
                onClick={() => removeFromBasket(product.id)}
                className="btn btn-danger"
              >
                -
              </button>
              <p className="mt-3">{product.amount}</p>
              <button
                onClick={() => addToBasket(product)}
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p>Toplam Fiyat : <span className="text-success">$ {totalPrice.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default Checkout;
