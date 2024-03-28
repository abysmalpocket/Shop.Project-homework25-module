import React, { useEffect } from "react";
import "../styles/aboutproduct.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../features/shopSlice";

function AboutProduct() {
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);
  return (
    <div className="wrapper__about-product">
      <div className='about-product__header'>
        <h5 className="about-product__title">{product.title}</h5>
      </div>
        <div className="about__product-image-block">
          <img
            className="about__product-image"
            src={
              product.images?.filter((el) => el.main)[0].url ||
              "./img/product-placeholder.png"
            }
            alt="product-img"
          />
        </div>
        <h5>Другие фото товара :</h5>
        {product.images?.map((el) => (
          <img className="other__image" src={el.url} alt="other__img" />
        ))}
        <hr />
        <div className="product__description">
          <h2>Описание товара: </h2>
          <p className="product__description-text">{product.description}</p>
        </div>
        <hr />
        <div className="price__product">
          <h2 className="price__title">Стоимость товара: </h2>
          <p className="price">{product.price + ' Руб'}</p>
        </div>
        <hr />
        <div className="comments__product">
          <h2 className="comments__title">Коммментарии: </h2>
          <p>
            {product?.comments?.map((el) => (
              <div className="">
                <h3>{ 'Имя: ' + el.name}</h3>
                <h4>{'Email: ' + el.email}</h4>
                <h5>{ 'Текст комментария: ' + el.body}</h5>
              </div>
            ))}
          </p>
        </div>
    </div>
  );
}

export default AboutProduct;
