import React from 'react'

function Header(props) {
  return (
   
      <header className="row block center">
    <div>
      <a href='#'>
        <h1>Small Shopping Cart</h1>
        </a>
        
    </div>
        <div className="cart-icon">
        <img src="./images/shopping-cart.png" alt="cart"></img>
        </div>
         </header>
  );
} 

export default Header