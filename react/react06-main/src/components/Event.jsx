import React from 'react';
import EventStyle from './../style/event.module.css';
import {Link} from 'react-router-dom';
import { useEffect ,useState } from 'react';
import EventItem from './EventItem';
import { MdExpandMore } from 'react-icons/md';
//MdExpandMore -> md가아이콘의 종류임




const Event = () => {
    //data 불러오기
    const listPlusNum = 3;
    const [dataList, setDataList] = useState([])
    const [moreNum,setMoreNum]=useState(listPlusNum) //초기값셋팅
    const dataUrl = './data/eventData.json';
    useEffect(() => {
        (async () => {
            await fetch(dataUrl)
            .then(res => res.json())
            .then(res=>setDataList(res))
        })()
     
      
    }, [])

    const fncMore = () => {
        setMoreNum(moreNum+listPlusNum)  //3d을 listPlusNum변수로 넣어주면 하나하나 안바꿔도되고 변수를 바꾸면 되니까 더 편하겠죠?!
    } 
    const viewData = dataList.filter((data, index) => index < moreNum)
    



    return (
        <div className={EventStyle.event}>
            <h2>Event</h2>
            <ul>
                {
                    viewData.map((data, index) => {
                        return ( 
                            <EventItem key={data.id} data={data} index={index} />
                        )
                    })
                }
               
            </ul>
            <div className={EventStyle.moreBtn}>
                <button type='button' onClick={fncMore}>
                   <MdExpandMore />
                </button>

            </div>
            
        </div>
    );
};

export default Event;