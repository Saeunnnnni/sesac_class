import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProducts] = useState(null)
    const getDetailData = async() => {
        let url = `http://localhost:5005/productList/${id}`
        let res = await fetch(url);
            let dataValue = await res.json();
            setProducts(data);  
    }
    
    useEffect(() => {
        getDetailData();
    },[])
    return (
        <div>
          <div>
                <h2>상품상세페이지 </h2>
                <h2> 제품 아이디 : {product ? product.product_name : null}</h2>
                <h2> 제품가격 : {product ? product.price: null}</h2>
            </div>
        </div>
    );
};

export default ProductDetail;