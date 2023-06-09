import React from 'react';
import './css/index.css';
import movieData from './../data/movieData.json';

const MovieList = () => {
    const movieList = movieData;
    const gradeColor = {
        '12':'gradeinfo on12', 
        '15':'gradeinfo on15' ,
        '전체':'gradeinfo onall' ,
    }

    return (
        <div>
            <ul className='movie-lists'>
                {
                    movieList.map((movie)=>{
                        const gradeValue=movie.grade;
                        return(
                            <li className='movie-list'>
                                <div className='imgbox'>
                                    <img src={movie.poster} alt={movie.title} />
                                    <span className={gradeColor[gradeValue]}>
                                        {movie.grade}
                                    </span>
                                    <div className="dimmed">
                                    <a href="#"> 예매하기 </a>
                                    <a href="#"> 상세정보 </a>
                                    </div>
                                </div>
                                <div className='txtbox'>
                                    <div className='title'>{movie.title}</div>
                                    <div className='info'>
                                        <span>예매율 <strong className='rateinfo'>{movie.rateinfo}</strong> %</span>
                                        <span>★ <strong className='starinfo'>8.9</strong></span>
                                    </div>
                                </div>
                            </li>
                        )

                    })

                }

             
            </ul>

        </div>
    );
};

export default MovieList;