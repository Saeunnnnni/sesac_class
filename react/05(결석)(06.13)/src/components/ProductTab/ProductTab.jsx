import React from 'react';
import ProductList from './ProductList';
import './css/ProductTab.css';
import productData from './../../db/productData.json';
import {useState} from 'react';

function ProductTab() {
    const [num, setNum] = useState(0);
    const tabDate=productData;
    const code =  tabDate.filter((data,index)=>index === num)
    console.log(code)
    const fncTab =(e,index) => {
        e.preventDefault();
        setNum(index);
    }
    return (
        <div className='product-tab'>
            <div className='tab-btn'>
                {
                    tabDate.map((data,index)=><button className={ num===index ? "btn active" : "btn"} key={data.id} onClick={(e)=>{fncTab(e,index)}} >{data.brand}</button>)
                }
                
            </div>
            <div className='tab-contents'>
                {
                    code.map((data,index) => <ProductList key={data.id} data={data} />)
                }
               
            </div>
        </div>
    );
}

export default ProductTab;