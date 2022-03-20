import Product from "./Product";

export default function Home({posts, addtoCart}) {
  return (
    <div className="container">
        <div className="row">
            {posts.map((post, ind) => 
                <Product 
                    data={post} 
                    key={ind} 
                    actionButton={"Add To Cart"} 
                    onButtonClick={addtoCart}
                />
            )}
        </div>
    </div>
  );
}   