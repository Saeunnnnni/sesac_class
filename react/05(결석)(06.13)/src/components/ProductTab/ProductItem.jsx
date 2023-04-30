import React from 'react';

function ProductItem({data}) {
    return (
        <li>
            <img src={data} alt="" />
        </li>
    );
}

export default ProductItem;