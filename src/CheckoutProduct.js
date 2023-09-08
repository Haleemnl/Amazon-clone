import React from 'react'
import './css/checkoutproduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, title, price, image, rating }) => {

    const [{ }, dispatch] = useStateValue();

    const RemoveFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            // item: {
            //     id: id,
            // }
        })

    }

    return (
        <div className='checkoutproduct'>

            <img className='checkoutproduct-image' src={image} alt="" />

            <div className="checkoutproduct-info">
                <p className='checkoutproduct-title'> {title}</p>

                <p className='checkoutproduct-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutproduct-rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>

                <button onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct