import React from "react";
import "./ProductList.css";
import ProductItem from "../components/ProductItem";

import { useEffect,useState} from "react";

const ProductList = () => {
    const [products, setProducts] = useState([])
    const dataProducts = () => {
        try {
            let url = 'http://localhost:5005/productList'
            let res = await fetch(url);
            let dataValue = await res.json();
            setProducts(dataValue);            
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => { 
        dataProducts();
    } , [])
    return (
        <section className="product-list">
         <h2 className="product-list-title">상품 목록</h2>
            <div className="product-item-container">
                {
                    products.map((ele) => <ProductItem item={item} key={item.id} />)
                }
           
        </div>
    </section>
    );
};

export default ProductList;