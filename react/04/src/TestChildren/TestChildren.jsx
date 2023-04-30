import React from 'react';

const TestChildren = ({a,b,c}) => {
   /*  const { a, b, c } = props;  이렇게 써도 되고 바로 위에 저렇게 받아도 됨 a,b,c=props 가 같은 거니까 축약해서 props로 써도 된다는 그런,, 뜻 ??*/ 
    return (
        <div>
            <ul>
                <li>{a}</li>
                <li>{b}</li>
                <li>{c}</li>

            </ul>
            
        </div>
    );
};

export default TestChildren;