import React from 'react'
import './css/product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, image, price, rating }) => {

    const [{ }, dispatch] = useStateValue();

    // the function dispatch an object action of type 'ADD_TO_BASKET'
    const addToBasket = () => {

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating

            }
        })
    }

    return (
        <div className='product'>
            <div className="product-info">

                <p>{title}</p>

                <p className='product-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}

                </div>

            </div>


            {/* image */}
            <img className='product-image' src={image} alt="" />
            {/* button */}
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product