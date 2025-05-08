import { useState,useEffect } from "react";

import { useParams } from "react-router-dom";
function View(){
    const [product, setProduct] = useState();
    let {ProductId} = useParams();
    useEffect( () => {
        fetch(`http://localhost:9000/products/${ProductId}`)
            .then((res) => res.json())
            .then((product) => {setProduct(product)});
    } , [])
    return(
        <div>
            <h1 style={{textAlign:'center'}}>Product Details By : {ProductId}</h1>
            {product && <>
            <img src={product.image} alt={product.title} style={{width: "200px"}}/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>

            </>}
        </div>
    )
}
export default View;