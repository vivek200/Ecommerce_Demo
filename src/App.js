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
    const alreadyInCart = cartItems.some(item => item.id === id);
    let newCart = [];
    if(alreadyInCart){
      newCart = cartItems.map(post => {
                  if(post.id === id){
                    post.qty++;
                  }
                  return post;
                });
    }
    else {
      const post = {...posts.filter(post => post.id === id)[0]};
      post.qty = 1;
      newCart = [...cartItems, post];
    }
    setCartItems(newCart);
  }

  const removeFromCart = id => {
    let newCart = [];
    if(cartItems.some(item => item.id === id && item.qty > 1)){
      newCart = cartItems.map(post => {
                    if(post.id === id){
                      post.qty--;
                    }
                    return post;
                  });
      }
      else {
        newCart = cartItems.filter(post => post.id !== id);
      }
      setCartItems(newCart);
    }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className='row'>
        <div className='col-1'>
          <Home posts={posts} addtoCart={addToCart} cartItems={cartItems}/>
        </div>
        <div className='col-1'>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
