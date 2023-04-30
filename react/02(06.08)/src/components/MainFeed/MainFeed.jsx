import React from 'react';
import './css/index.css';
import userData from './userData.json';
import feedData from './feedDate.json';
import TxtFeed from '../TxtFeed';
import ImgFeed from '../ImgFeed';

const MainFeed = () => {
    const dbFeeds = feedData;
    const users = userData.map((item) => {
        return (
             <li className='friend' key={item.id}>
                <div className='profile-image'></div>
                <div className='nickname'>{item.username}</div>
            </li>
        )
    })


    return (
        <div className='mainFeed'>
            <div className='wrapper'>
                <div className='feed-list'>
                    <form className='write-feed'>
                        <div className='profile-image'></div>
                        <div className='inp'>
                            <input type='text' placeholder='오늘은 무슨일이 있었나요?'/>
                        </div>
                        <div className='get-image'>
                            <label htmlFor='get-image-input'>
                                <img src='/assets/main/add-image.svg' alt="이미지추가하기"/>
                            </label>
                            <input type='file' id='get-image-input'/>
                        </div>
                    </form>
                    {
                        dbFeeds.map((feed) => {
                            return (
                                !(feed.thumbnailUrl)?<TxtFeed email={feed.email} body={feed.body} name={feed.name} key={feed.id} />:
                                <ImgFeed email={feed.email} body={feed.body} name={feed.name} key={feed.id} img={feed.thumbnailUrl} />
                            )
                        })
                    }
                    
           
                </div>
                {/* feed-list */}
                <div className='friend-list'>
                    <div className='my-profile'>
                        <div className='profile-image'></div>
                        <div className='nickname'>Saeunnni</div>
                    </div>
                    <div className='my-friends'>
                        <div className='title txt bold'>My friends</div>
                        <ul className='friends'>
                            {users}
                           {/* /*  <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickname'>chaaaebin</div>
                            </li>
                            <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickname'>yujeong</div>
                            </li>
                            <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickname'>chooo96</div>
                            </li>
                            <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickname'>lka90</div>
                            </li>
                            <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickname'>yuri</div>
                            </li> */} 

                        </ul>
                    </div>
                </div>
                {/* friend-list */}
            </div>
            
        </div>
    );
};

export default MainFeed;