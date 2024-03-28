import React, { useEffect } from "react";
import "../styles/mainpage.css";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../features/shopSlice";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickGetAllProducts = (e) => {
    e.preventDefault();
    navigate("/products-list");
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="weapper__main-page">
      <div className="header">
        <h1 className="header__heading">Shop.Project</h1>
      </div>
      <p className="text__main-page">
        В базе данных находится {products.length} товаров общей стоимостью{" "}
        {products.reduce((acc, el) => acc + el.price, 0)}
      </p>
      <button
        onClick={(e) => handleClickGetAllProducts(e)}
        type="button"
        className="btn__main-page"
      >
        Перейти к списку товаров
      </button>
    </div>
  );
}

export default MainPage;
