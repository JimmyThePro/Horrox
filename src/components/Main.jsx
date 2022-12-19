import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import requests from "../Requests";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(requests.requestPopular);
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    const lessLetters = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    };
    console.log(movie);

    return (
        <div className="w-full h-[550px] text-white mb-5">
            <div className="w-full h-full relative border-b-2 border-white">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className="absolute w-full top-[35%] p-4 md:p-8">
                    <div className="flex items-center space-x-1 text-yellow-300">
                        <FaStar />
                        <p className="text-sm md:text-xl">
                            {movie?.vote_average}
                        </p>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold">
                        {movie?.title}
                    </h1>
                    <div className="my-4">
                        
                        <a
                            href={`https://www.themoviedb.org/movie/${movie?.id}`}
                            type="button"
                            target="_blank"
                            rel="noreferrer"
                            className="border text-white border-gray-300 mt-2 py-2 px-5"
                        >
                            More Info
                        </a>
                    </div>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%] text-gray-200">
                        {lessLetters(movie?.overview, 125)}
                    </p>
                    <p className="text-gray-400 pt-1 text-xs italic">
                        Released: {movie?.release_date}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
