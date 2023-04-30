import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // 요소 검사하면 앵커 태그로 나옴

const Nav = () => {
    const navList = [
        { content: 'Main', href: '/' },
        { content: 'CardList', href: 'cardList' },
        { content: 'Notice', href: 'Notice' },
    ]
    return (
        <div id='nav'>
            <h2 className='blind'>메인 메뉴</h2>
            <ul>
                {
                    navList.map((element, index) => {
                        return (
                            /* nav link */
                            <li key={index}> <NavLink to={element.href} className={({ isActive }) => isActive ? 'navList on' : 'navList'}> {element.content} </NavLink> </li>
                            // 클래스에 on 이 붙으면 바뀌도록 
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Nav;