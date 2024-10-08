import React, { useContext } from "react";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { ProductContext } from "../context/productContext";

const MainPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3">
      {!products && <Loading></Loading>}
      {products?.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default MainPage;
