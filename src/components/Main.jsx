import { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestHorror).then((response) => {
        setMovies(response.data.results);
        });
    }, []);

    const lessLetters = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
    };

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className='absolute w-full top-[25%] p-4 md:p-8'>
                    <h1 className='text-2xl md:text-4xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 mr-4'>
                        Watch Trailer
                        </button>
                        <button className='border text-white border-gray-300 mt-2 py-2 px-5'>
                        More Info
                        </button>
                    </div>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {lessLetters(movie?.overview, 125)}
                    </p>
                    <p className='text-gray-400 pt-1 text-xs italic'>
                        Released: {movie?.release_date}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;
