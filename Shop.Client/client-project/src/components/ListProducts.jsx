import React, { useEffect } from 'react'
import '../styles/listproducts.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../features/shopSlice'
import { getProducts } from "../features/shopSlice";

function ListProducts() {
	const navigate = useNavigate()
	const products = useSelector((state) => state.products.products)
	const dispatch = useDispatch()

	const handleClickAboutProduct = (e, id) => {
		e.preventDefault()
		navigate(`/${id}`)
		dispatch(getProduct(id))
	}

	useEffect(() => {
		dispatch(getProducts());
	  }, [dispatch]);
  return (
	<div className='wrapper__list-products'>
		<div className='header__list-products'>
			<h1 className='heading__list-products'>Список товаров - {products.length + ' штук'}</h1>
		</div>
		<div className='main-content__list-products'>
			{products.map((el) => (
				<div className='card__products'>
					<h5 onClick={(e) => handleClickAboutProduct(e, el.id)} className='title__product'>{el.title}</h5>
					<img className='img__product' onClick={(e) => handleClickAboutProduct(e, el.id)} src={el.images?.filter((el) => el.main)[0].url || './img/product-placeholder.png'} alt="card" />
					<p className='price__product'>{'Цена: ' + el.price + ' Р'}</p>
					<p className='comment__product'>{el.comments && el?.comments.length + ' комментария'}</p>
				</div>
			))}
			
		</div>
	</div>
  )
}

export default ListProducts