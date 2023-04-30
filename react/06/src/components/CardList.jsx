import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';


const CardList = () => {

    const [cardData, setCardData] = useState([]); 



    const dataUrl = './data/cardData.json';
    useEffect(() => {
        axios.get(dataUrl) //순차적으로 받아서 검증을 하고 업데이트를 했다
            .then(response => response.data)
            .then(data => setCardData(data))
            .catch(error=>{console.log(error)}) 
    }, [])  
    
    //위에를 축약하면 밑에 
 /*    useEffect(() => { //받아서 바로 변수로 집어넣어서 업데이트 
        const res = axios.get(dataUrl)
        setCardData(res.data);
    },[])
     */

 
/*     useEffect(() => {
        axios('http://localhost:3001/data/cardData.json')/* =('./data/cardData.json')*/
            /*.then(reponse => response.json())
            .then(data => setCardData(data))
            .catch(error=>{console.log(error)})  -> axios로변환
    }, [])  */
    
/*     useEffect(() => {
        fetch('http://localhost:3001/data/cardData.json')
            .then(reponse => response.json())
            .then(data => setCardData(data))
            .catch(error=>{console.log(error)})  
    },[]) */
/*     console.log(cardData) */
    return (
        <div className='card_area'>
            <h3>CardList</h3>
            <ul className='card_wrap'>
          
            
            {
                cardData.map((card) => <Card key={card.id} card={card} /> )
                
            }
            </ul>
        </div>
    );
};

export default CardList;
