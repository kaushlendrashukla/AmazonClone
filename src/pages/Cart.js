import React, { useContext } from 'react'
import "./Cart.css"
import CartContext from '../Store/Cart-context';
import CheckoutProduct from './CheckoutProduct';

function Cart() {

  const cartCtx = useContext(CartContext)

  return (
    <div className='cart'>
      <img className='cart__img' src="./images/carousel1.jpg" alt="photo" />
      <div>
        <h2 className='cart__title' > your cart is empty</h2>
      </div>
      {
        cartCtx.items.map(item => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))
      }
    </div>
  )
}

export default Cart