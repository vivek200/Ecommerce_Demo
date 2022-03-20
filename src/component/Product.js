import React from "react";

const Product = ({ data, actionButton, onButtonClick , Qty })=>{
return (
    <div className="container-first" style={{width: "40%", margin: '5px'}}>
        <img src={data.thumbnail} alt="POST_1" crossOrigin="" width="120" height="50"/>
        <h2>{data.title}</h2>
        <div>${data.price}</div>
        <div>{Qty}{data.qty}</div>
        <div><button onClick={() => onButtonClick(data.id)}>{actionButton}</button></div>
    </div>
  );
}

export default Product;