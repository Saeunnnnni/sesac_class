import React from 'react';
import styled from 'styled-components';

const Pagination = ({ total, page, setpage, LIST_PER_PAGE }) => {
    const PagesNum = Math.ceil(total / LIST_PER_PAGE); //Mate.ceil ->반올림 
    const pagesNumArray = new Array(PagesNum);
    pagesNumArray.fii('a',5,8);//배열을 채워주는 매서드 (시작인자, 끝인자) : 인자가 하나면 끝까지 그 값으로 채워짐 
    console.log(pagesNumArray)
    return (
        <PaginationBox>
            <PrevButton onClick={() => { setpage(page - 1) }} disavled={page === 1}>이전</PrevButton>
            {
                pagesNumArray.fill().map((ele, i) => {
                    return (
                        <PageNumButton key={i+1} onClick={()=>setpage(i+1)}>
                            {i+1}
                        </PageNumButton>
                    )
                })
            } 
    
            <NextButton  onClick={()=>{setpage(page+1)}} disavled={page===PagesNum}>이후</NextButton>
            
        </PaginationBox>
    );
};

export default Pagination;
const PaginationBox=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    margin:1rem auto;
`

const PrevButton =styled.button`
    border-radius: 0.25rem;
    padding : 0.25rem 0.375rem;
    color:#000;
    width: 40px; height:24;
    background:#cda8a8;
    font-size: 0.75rem;
    &:hover{
        cursor: pointer;
        color: #f23;
    };
    &[disabled]{
        background: #e0e0e0;
        color:#fff;

    }
`
const NextButton = styled(PrevButton)`
    
`
const PageNumButton = styled(PrevButton)`
    background: none;
    color:#666;
    font-size:1rem;
`