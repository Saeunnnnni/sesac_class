
import React from 'react';
import { useState } from 'react';
import productData  from './../../db/productData.json';
import TabUl from './TabUl';
function Tab(props) {
    const tabData = productData;
    const [dataIndex,setDataIndex] = useState(0);
    const handleTab = (e,index) => {
        e.preventDefault();
        setDataIndex(index)
    }
    const dataUl = tabData.filter((data,index)=>index===dataIndex)
    return (
        <div className='Tab'>
            <div className='tab-title'>
                {
                    tabData.map((dataItem,index) => <button className={(dataIndex===index)?"btn active":"btn"} key={dataItem.id} onClick={(e)=>{handleTab(e,index)}}>{dataItem.title}</button>)
                }
               
            </div>
            <div className='tab-body'>
                {
                    dataUl.map((data,index) =><TabUl key={data.id} data={data} />)
                }
               
                
            </div>
        </div>
    );
}

export default Tab;