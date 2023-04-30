import React from 'react';
import './index.css';

const VideoView = ({id}) => {
    return (
       
        <div className='playVideoBox'>
            <div className='iframeBox'>
            <iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title="YouTube video" allowfullscreen></iframe>
            </div>
            <div className='descriptionContainer'>

            </div>
            </div>
    );
};

export default VideoView;