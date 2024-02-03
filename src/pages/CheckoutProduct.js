import React, { useContext } from 'react'
import "./CheckoutProduct.css"
import CartContext from '../Store/Cart-context'

function CheckoutProduct({ id, title, image, price }) {

    const cartCtx = useContext(CartContext);

    const removeFromCartHandler = () => {
        cartCtx.removeItem({ id: id })
    }
    const orderHandler = () => {
        console.log("hii")
    }

    return (
        <div className='checkoutProduct'>

            <img className='checkoutProduct__img' src={image} alt={title} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>{`₹ ${price}`}</p>
                <button className='remove_button' onClick={removeFromCartHandler} >Remove from cart</button>
                <button className='order_button' onClick={orderHandler} >Order</button>
            </div>
        </div>
    )
}

export default CheckoutProduct