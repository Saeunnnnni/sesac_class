import React from "react"; //기본적으로 부르기 

function Nav() {
    const navList = { width: 100, height: 50, lineHeight:'50px', backgruundColor: '#487', margin: 10, 
}//px붙일때는 '' 붙여야함 
    
    return (
        <nav style={{display:'flex',justifyContent:'center'}}>
            <ul>
                <li style={navList}> 메뉴1</li>
                <li style={navList}> 메뉴2</li>
                <li style={navList}> 메뉴3</li>

            </ul>
        </nav>
    )
    
}

export default Nav;