import React from 'react';
import ProductItem from './ProductItem';

function ProductList({data}) {
    const list = data;
    return (
        <div className='tab-list'>
            <h2 className='brandTitle'>{list.brand}</h2>
            <ul className='tab'>
               {
                 list.images.map((imgData,index)=> <ProductItem key={index} data={imgData} />)
               }
            </ul>
        </div>
    );
}

export default ProductList;