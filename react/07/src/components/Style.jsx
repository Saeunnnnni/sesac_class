import React from 'react';
import styled, { keyframes } from 'styled-components';
//추가로 키프레임즈라고 하는 컴퍼넌트가 임폴팅 되어 있어야 함 키프레임즈까지 적혀있어야지 사용할수 있음 중괄호 꼭 쳐줘야함 


const Style = () => {
    return (
        <div>
            <Box> {/* 디자인을 하기 위한 컴포넌트  */}
                <Title fontSize='2rem' color='#d39'>스타일드 컴포넌트</Title>
                <Title fontSize='1.5rem' color='#88dd33'>css in js</Title>
                <Title color='#ee7124'>Fun and Easy</Title>

                <Btn borderColor='#242eee' active>normal</Btn>
                <Btn  borderColor='#727171'>disabled</Btn>
                <Btn borderColor='#ee7124'>active</Btn>
                <Text fontSize='20px' color='#ee7124'> 2022년 6월 20일</Text>
                <Text fontSize='16px' color='#5dee24'> 월요일</Text>
                <Text fontSize='24px' color='#2446ee'> 오전 10시 13분</Text>


            </Box>
            <Box as='ul'> {/* 같은 css는 적용하는데 ul로 쓰고 싶을때  */}
                <Text fontSize='16px' color='#ee24c6' as='li'>menu1</Text>
                <Text fontSize='16px' color='#ee24c6' as='li'>menu2</Text>
                <Text fontSize='16px' color='#ee24c6' as='li'>menu3</Text>
        
            </Box>
            <Box>
                <AniBtn>애니메이션 버튼</AniBtn>
            </Box>
        </div>
    );
};

export default Style;


const Btn = styled.button.attrs(props => ({
    type: 'button', 
    className : props.active ? 'btn on' : 'btn'
}))`
    width: 80px;
    height: 40px;
    border-radius: 3px;
    margin: 10px;
    color : ${(props) => props.borderColor};
    border : 1px solid ${(props) => props.borderColor};
    
`
const Box = styled.div`
    width :500px;
    height: 300px;
    border : 5px solid red;
    margin : 3rem auto;
    text-align: center;
`

const Title = styled.h2`
font-size: ${(props)=>props.fontsize};
color : ${(props)=>props.color};
margin: 1rem auto;
`

const Text = styled.p`
    font-size:${(props) => props.fontSize};
    color:${(props) => props.color};
    text-align: center;
    margin:10px 0;
`
const colorChange = keyframes`
    0%{background-color: red;}
    100%{background-color: #bfff00;}
`

const AniBtn = styled(Btn) `
    width:400px;
    animation: ${colorChange} 1.5s alternate infinite;
`
//원래 만든 btn스타일을 적용시키고 다른 부분은 새로 적용 ! + 애니메이션 적용  
//변수로 만들고 animation 에 $로 적용 !


/* 각각 설정하고 싶은게 다를때  props로 만들어서 변수처럼 받아서 사용 style-components의 기능 */
/* 



1.as사용
2.props사용 
3.atrrs 사용
4.확장
5.애니메이션 적용
6.글로벌 css


css
scss
module.css
styled components 
css in js : css에 js같이 사용하는 것
*/