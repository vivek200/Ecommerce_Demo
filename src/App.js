import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [posts, setPosts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
    
  const fetchPost = () => {
    axios.get("https://dummyjson.com/products/category/smartphones")
    .then(res => {
        const data = res.data || [];
        setPosts(data.products);
    });
  }

  const addToCart = id => {
   setCartItems(
    [...cartItems , ...posts.filter(item => item.id === id)])
  }

  const removeFromCart = id => {
    setCartItems(
     cartItems.filter(item => item.id!==id)
    )
    }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className='row'>
        <div className='col-1'>
          <Home posts={posts} addtoCart={addToCart}/>
        </div>
        <div className='col-1'>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
