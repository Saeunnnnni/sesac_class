import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import  Pagination from './Pagination';

const ListTotal = () => {
    const [lists, setLists] = useState([]);
    const LIST_PER_PAGE = 10; //한장에 보여질 리스트의 수
    const [page, setPage] = useState(1) //페이지
    const startNum = (page - 1) * LIST_PER_PAGE; //0 10 20 30
    const endNum = startNum + LIST_PER_PAGE; //10 20 30 40 
    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json()) //값의 결과? res-> 아무거나 써도 됨 respond의 약자 
        .then((res)=>setLists(res))
    }, [])
    console.log(lists)
    return (
        <div>
            <Title>게시물목록</Title>
            
            <Ul>
                {
                [...lists].reverse().slice(startNum,endNum).map(({id, title, body})=>{
                    return(
                    <Li>
                        <span className='idName'>{id}</span>
                        <span className='listbody'>{body}</span>
                        
                        
                         {/*    <span className='listBody'>게시물</span> */}
                    </Li>
            
                        )
                    })
                
          
                } 
            </Ul>
            <Pagination total={lists.length} page={ page} setPage={setPage } listPerPage={ LIST_PER_PAGE} />

        </div>
    );
};

export default ListTotal;

const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    margin-top:2rem;
    color: #b66666;
`
const Ul = styled.ul`
    font-size:0.875rem;
    margin: 3rem auto;
    width: 1000px;
`
const Li =styled.li`
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    &>.idNane{
        width: 3rem;
        color: #333;
    }
    &>.listBody{

        width: 50rem;
        color: #000;
        text-overflow:ellipsis;
        overflow: hidden;
        white-space:nowrap;
        color:#666;
        text-align: left;
    }
    &>.listBody:hover{
        width: 100px;
        color: #000;
    }
    &:hover{
        background-color: rgba(0,0,0,.1);
        cursor:pointer
    }
`