import React from 'react';

const DetailRedirect = ({auth}) => {
    return auth ? <ProductDetail /> : <Navigate to='/login' />;
};

export default DetailRedirect;