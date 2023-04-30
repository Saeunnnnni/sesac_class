import React from 'react';
import { Navigate } from 'react-router-dom'; 
import User from '../pages/User'

const RedirectRoute = ({auth}) => {
    return auth === true ? <User />: <Navigate to='/login'/>;
};

export default RedirectRoute;



/*  
Redirects
특정페이지에 왔을때 다른페이지로 가게 만드는것  
방향을 다른페이지로 돌려 주는 것 
*/