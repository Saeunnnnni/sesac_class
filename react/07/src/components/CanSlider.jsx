import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const CanSlider = () => {
    return (
        <CanSliderBox>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{clickable: true,}}
                modules={[Autoplay,Navigation, Pagination]}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl:'.next',
                    prevEl:'prev',
                }}
            >
            <SwiperSlide><img src='./img/slide/can1.jpg' alt='' /></SwiperSlide>
            <SwiperSlide><img src='./img/slide/can2.jpg' alt='' /></SwiperSlide>
            <SwiperSlide><img src='./img/slide/can3.jpg' alt='' /></SwiperSlide>
            <SwiperSlide><img src='./img/slide/can4.jpg' alt='' /></SwiperSlide>
            <SwiperSlide><img src='./img/slide/can5.jpg' alt='' /></SwiperSlide>
            <SwiperSlide><img src='./img/slide/can6.jpg' alt='' /></SwiperSlide>
            <SwiperSlide><img src='./img/slide/can7.jpg' alt='' /></SwiperSlide>
            <SwiperSlide><img src='./img/slide/can8.jpg' alt='' /></SwiperSlide>
            <SwiperSlide><img src='./img/slide/can9.jpg' alt='' /></SwiperSlide>
            <NavPrev className='prev' />
            <NavNext className='next' />
        </Swiper>
                
        </CanSliderBox>
    );
};

export default CanSlider;

const CanSliderBox = styled.div`
    width: 1200px;    
    height: auto;
    margin:3rem auto;
    & .swiper-slide img{
        width:150px;
    }
`

const NavPrev=styled.button`
    background: url(./img/slide/prev.png) no-repeat center;
    width:40px; height: 40px;
    position: absolute;  //swiper가 position:relative를 가지고 있기때문에 상위요소가 필요없음
    transform: translateY(-50%);
    top:50%; left: 50px;
    z-index: 5000;
`
const NavNext=styled(NavPrev)`
    background: url(./img/slide/next.png) no-repeat center;
    left: auto; right:50px;

`