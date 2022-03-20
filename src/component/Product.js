import React from "react";

const Product = ({ data, actionButton, onButtonClick })=>{
return (
    <div className="container-first" style={{width: "25%", margin: '5px'}}>
        <img src={data.thumbnail} alt="POST_1" crossOrigin="" width="100" height="50"/>
        <h2>{data.title}</h2>
        <div>${data.price}</div>
        <div> <button onClick={() => onButtonClick(data.id)}>{actionButton}</button></div>
    </div>
  );
}

export default Product;