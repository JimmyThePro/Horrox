import { FaSearch, FaStar, FaGhost } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { key } from "../Requests.js";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchMovie, setSearchMovie] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchMovies = async () => {
            if (searchMovie !== '') {
                try {
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchMovie}`
                    );
                    setResults(response.data.results);
                } catch (error) {
                    console.log("Something went wrong...");
                }
            } else {
                setResults([]);
            }
        };
        searchMovies();

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [searchMovie]);

    return (
        <>
            <header className={`${isScrolled && "bg-[#141414f1]"}`}>
                <nav className="flex items-center space-x-2 md:space-x-10">
                    <NavLink to="/">
                        <h1 className="text-red-600 text-4xl font-bold cursor-pointer object-contain flicker-3 pb-1">
                            HORROX
                        </h1>
                    </NavLink>
                    <div className="flex space-x-4 text-white font-light italic">
                        <q className="hidden md:flex">
                            The Best Horror Movie Site!
                        </q>
                        <FaGhost className="mt-1 vibrate-1"/>
                    </div>
                </nav>
                <div className="flex items-center justify-between text-white border-2 border-gray-300 bg-gradient-to-r from-[#200] to-transparent h-10 px-5 rounded-lg text-sm">
                    <input
                        className="focus:outline-none bg-transparent"
                        type="text"
                        placeholder="Search Movie..."
                        value={searchMovie}
                        onChange={(event) => setSearchMovie(event.target.value)}
                    />
                    <FaSearch className="text-gray-300" />
                </div>
            </header>
            <div>
                {results.map((movie, id) => (
                    <a
                        key={id}
                        onClick={() => {
                            let sameMovie = false;
                            const storedMovies = JSON.parse(localStorage.getItem('recentlyViewedMovies')) || [];
                            storedMovies.forEach((element) => {
                                if (element.id === movie.id) {
                                    sameMovie = true;
                                }
                            });
                            if (!sameMovie) {
                                storedMovies.unshift(movie);
                                localStorage.setItem(
                                    "recentlyViewedMovies",
                                    JSON.stringify(storedMovies)
                                );
                            }
                        }}
                        href={`https://www.themoviedb.org/movie/${movie?.id}`}
                        target='_blank'
                        rel='noreferrer'
                        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2 z-40"
                    >
                        <div>
                            <img
                                className="w-full h-auto block shadow-md rounded-lg"
                                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                                alt={movie?.title}
                            />
                            <div
                                className="w-full flex items-center justify-center space-x-1 text-yellow-300 text-sm md:text-base
                                bg-[#290606af] absolute bottom-0 rounded-b-lg"
                            >
                                <FaStar className="mr-1" />
                                <p>{movie?.vote_average}</p>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 transition duration-300 opacity-0 hover:opacity-100 text-white rounded-lg">
                            <div className="text-white text-sm md:text-lg font-bold flex whitespace-pre-wrap justify-center items-center h-full text-center">
                                <p>{movie?.title}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Navbar;
