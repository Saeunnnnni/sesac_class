import React from 'react';
import "./ProductItem.css";
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cart/cartSlice';

const ProductItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div className="product-item">
            <img
            className="item-image" 
            alt="product"
            src={item.product_img} />
            <div className="item-name">{item.product_name}</div>
            <div className="item-price">{item.price.toLocaleString()}원</div>
            <button className="add-cart-btn" onClick={()=>dispatch(addCart(item))}>
                <i className="fas fa-plus"></i>
                장바구니에 담기
            </button>
        </div>
    );
};

export default ProductItem;