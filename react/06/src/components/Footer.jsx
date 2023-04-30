import React from 'react';
import '../style/footer.css';
import { NavLink, Link } from 'react-router-dom'

const Footer = ({ title }) => {

    const fncActive = ({ isActive }) => {
        return isActive ? 'on' : ''
    }

    return (
        <footer id="footer">
            <h2>{title} 정보 </h2>
            <div className='company-info'>
                {/* 클릭하면 해당 정보 페이지로 이동하도록 */}
                <ul>
                    {/* className on 하는 거 맵으로 돌리면 되는데 애초에 li 를 맵으로 돌리지 않았기 때문에 함수 써서 호출해준 것 */}
                    <li><NavLink to='/manual' className={fncActive}>이용약관</NavLink></li>
                    <li><NavLink to='/policy' className={fncActive}>개인정보처리방침</NavLink></li>
                    <li><NavLink to='/rule' className={fncActive}>회사개요</NavLink></li>
                    <li><NavLink to='/etcInfo' className={fncActive}>기타정보</NavLink></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;