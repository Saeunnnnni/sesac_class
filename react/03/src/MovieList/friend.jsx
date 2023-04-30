import React from 'react';
import React from 'react';
import './css/friend.css';
import friendData from './../data/friendData.js';

const friendList = () => {
    const friendList = friendData;
    return (
        <div>
            <ul className='friend-list'>
                {
                    friendList.map((friend) => {
                        return (
                            <li className='friend-list' key={friend.id}>
                                <div className='friend-namecard'>
                                    <div className='friend-name'>{friend.name}</div>
                                    <div className='friend-email'>{friend.email}</div>
                                    <div className='friend-phone'>{friend.phone}</div>
                                    <div className='friend-nickname'>{friend.nickname}</div>

                                </div>

                            </li>
                        )
                    })

                }
                
            </ul>

            
        </div>
    );
};

export default friend;