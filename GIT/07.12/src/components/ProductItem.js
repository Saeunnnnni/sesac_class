import React from 'react';
import "./ProductItem.css";
const ProductItem = (item) => {
    const navigate = useNavigate();
    const goToDeatail = (id) => {
        navigate(`/productList/${id})`)
    }
    return (
        <div className="product-item" onClick={()=>{goToDeatail(item.id)}}>
        <img
            className="item-image" 
            alt="product"
            src={item.product_img} 
         />
        <div className="item-name" >{item.product_name}</div>
        <div className="item-price">{item.price}원</div>
    </div>
    );
};

export default ProductItem;