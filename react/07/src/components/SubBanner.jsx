import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SubBanner = () => {
    const pagination = {
        el: '.pagination-box', //el를 설정해주기 ! 
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        
    };
    return (
        <SubSlider>
            <Swiper
            className='mySwiper' //스와이퍼클래스네임을 설정 할 수 있음 
                modules={[Autoplay,Navigation, Pagination]}
                pagination={pagination}
                navigation 
                loop={true} //무한루프
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }} //자동으로 넘어가는 거! 
                spaceBetween={0} //슬라이더 사이 마진
                slidesPerView={1} //한번에 보여지는 슬라이더
                onSlideChange={() => console.log('slide change')} //슬라이드를 넘길 때 마다 호출한다.
                onSwiper={(swiper) => console.log(swiper)} 
                    >
                    <SwiperSlide><img src='./img/slide/slide01.png' alt='' />Slide 1</SwiperSlide>
                    <SwiperSlide><img src='./img/slide/slide02.png' alt='' />Slide 2</SwiperSlide>
                    <SwiperSlide><img src='./img/slide/slide03.png' alt='' />Slide 3</SwiperSlide>
                    <SwiperSlide><img src='./img/slide/slide04.png' alt='' />Slide 4</SwiperSlide>
                <div className='pagination-box'></div>
                
                </Swiper>

        </SubSlider>
      
    );
};

export default SubBanner;

const SubSlider= styled.div`
    width: 1200px;  
    margin: 1rem auto;
    & .swiper-slide img{
        width: 100%;
    }
    & .mySwiper .pagination-box{
        display: flex;
        justify-content: center;
        margin-top:1rem;
    }
    & .mySwiper .pagination-box .swiper-pagination-bullet{
        width : 24px; height: 24px; opacity: 1;
        border : 2px solid transparent;
        font-size: 0;
    }
    & .mySwiper .pagination-box .swiper-pagination-bullet.swiper-pagination-bullet-active{
        border-color: blue;
    }
    .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(1){
        background: url(./img/slide/thumb01.png) center / cover;
    }
    .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(2){
        background: url(./img/slide/thumb02.png) center / cover;
    }
    .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(3){
        background: url(./img/slide/thumb03.png) center / cover;
    }
    .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(4){
        background: url(./img/slide/thumb04.png) center / cover;
    }
`
