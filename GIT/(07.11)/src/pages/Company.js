import React from 'react';
import {useNavigate} from 'react-router-dom'
const Company = () => {
    const useNavigate = useNavigate();
    const goToMain = () => {
        navigator('/')
        
    }
    return (
        <div>
            <h1>회사소개 페이지</h1>
            <button onClick={goToMain}>메인페이지로 이동</button>
        </div>
    );
};

export default Company;