import React from 'react'
import Product from './Product';

function Cart({ cartItems, removeFromCart }) {
  return (
    <aside className="block col-1" style={{textAlign: "center"}}>
        <h3>Cart</h3>
        <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
          {cartItems.map((cartItem, ind) => 
            <Product data={cartItem} key={ind} actionButton={"Remove"} onButtonClick={removeFromCart}/>
          )}
        </div>
    </aside>
    
  )
}

export default Cart;