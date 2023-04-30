import React from "react";



const Manual = () => {
    return (
        <div className="footerMenu">
            <h2>메뉴얼 페이지</h2>

        </div>
    )
}
const Rule = () => {
    return (
        <div className="footerMenu">
             <h2>회사방침 페이지</h2>

        </div>
    )
}

const EtcInfo = () => {
    return (
        <div className="footerMenu">
             <h2>기타정보 페이지</h2>

        </div>
    )
}

const Policy = () => {
    return (
        <div className="footerMenu">
             <h2>이용약관개인정보처리방침</h2>


        </div>
    )
}

export { Manual, Policy, Rule, EtcInfo }


/* export function Manual() {
    return (
    <div>
            <h2>메뉴얼 페이지</h2>

        </div>
        
    )
} 이런식으로 만들어도 됨 그러면 밑에 export 안만들고 바로바로 export시킬수 있ㄷ음  */