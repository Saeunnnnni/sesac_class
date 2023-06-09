import React from 'react';
import {MdFavorite} from "react-icons/md";
import { useState } from 'react';

const Card = ({card})  => {
   const favListColor = [ {color:'#ddd'},  {color:'#F20'}]
   const btnColor = [ 
    {color:'#fff',fontWeight:700,backgroundColor:'#ada'}, 
    {color:'#fff',fontWeight:700,backgroundColor:'#8f8'}
]
   const [fav, setFav] = useState(0);
   const[checkState, setCheckState]=useState('')
   const fncFav = (e) => {
      setFav((fav === 0) ? 1 : 0); 
      setCheckState(e.target.checked) //check 될때 ture,false값을 나오게 하는것 
   }

    return (
        <li>
        <div className='img_set' style={{background:`url(${card.imgUrl}) no-repeat center / cover`}}></div>
        <dl>
           <dt>{card.title}</dt>
           <dd>{card.content}</dd>
        </dl>
          <div className='btns'>
             <input type='checkbox' id={card.checkName} name={card.checkName}
                data-checked={checkState}
                onChange={fncFav}
                className='blind' // 블라인드 처리 되어서 안보이면 버튼을 누루면 t/f로 값이 나와야함! 
          
             />
           <label 
           htmlFor={card.checkName} 
           style={btnColor[fav]}>
            좋아요
            <MdFavorite style={favListColor[fav]} />
           </label>
           <a className='link' href={card.dataLink}>상세보기</a>
       </div>
       </li>
    );
};

export default Card;