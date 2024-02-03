import React, { useContext } from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom';
import CartContext from '../Store/Cart-context';
import CheckoutProduct from './CheckoutProduct';

function Cart() {

  const cartCtx = useContext(CartContext)
  console.log(cartCtx)

  function orderHandler() {
    window.alert("Thanks for shopping!");
    cartCtx.items = [];
  }
  return (
    <div className='cart'>

      <img className='cart__img' src="./images/carousel1.jpg" alt="photo" />
      <div>
        <h2 className='cart__title' >{cartCtx.items.length == 0 ? "your cart is empty" : " "}</h2>
      </div>

      {
        cartCtx.items.map(item => (
          <CheckoutProduct
          ordersHandler={orderHandler}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))
      }

      <div className='cart__checkoutprice'>
        {cartCtx.items.length == 0 ?
          <Link to="/"> <span>Shop now</span></Link>
          :
          (`Total Amount = ₹ ${cartCtx.totalAmount}`)}
        {cartCtx.items.length == 0 ?
          "" :
          <button onClick={orderHandler} className='cart__orderbutton' >Order</button>}

      </div>

    </div>
  )
}

export default Cart