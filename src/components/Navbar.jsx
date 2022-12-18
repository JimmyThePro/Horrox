import { FaSearch, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchMovie, setSearchMovie] = useState([]);
    const [results, setResults] = useState([]);
    const key = "03526a361dbbb2a0c7d336b8ce32f132";

    const searchMovies = async (event) => {
        setSearchMovie(event.target.value);

        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchMovie}`
            );
            setResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
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
    }, []);

    return (
        <>
            <header className={`${isScrolled && "bg-[#141414f1]"}`}>
                <nav className="flex items-center space-x-2 md:space-x-10">
                    <NavLink to="/">
                        <h1 className="text-red-600 text-4xl font-bold cursor-pointer object-contain flicker-3">
                            HORROX
                        </h1>
                    </NavLink>
                    <ul className="hidden space-x-4 md:flex">
                        <li className="navLink">
                            <NavLink to="/movies">Movies</NavLink>
                        </li>
                        <li className="navLink">
                            <NavLink to="/series">Series</NavLink>
                        </li>
                    </ul>
                </nav>
                <form className="flex items-center justify-between text-white border-2 border-gray-300 bg-gradient-to-r from-black to-transparent h-10 px-5 rounded-lg text-sm">
                    <input
                        className="focus:outline-none bg-transparent"
                        type="text"
                        placeholder="Search..."
                        value={searchMovie}
                        onChange={searchMovies}
                    />
                    <FaSearch className="text-white"/>
                </form>
            </header>
            {results && (
                <div>
                    {results.map((movie, id) => (
                        <div
                            key={id}
                            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2"
                        >
                            <div>
                                <img
                                    className="w-full h-auto block"
                                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                                    alt={movie?.title}
                                />
                                <div
                                    className="w-full flex items-center justify-center space-x-1 text-yellow-300 text-sm md:text-base
                                 bg-[#290606af] absolute bottom-0"
                                >
                                    <FaStar className="mr-1" />
                                    <p>{movie?.vote_average}</p>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                                <div className="text-white text-sm md:text-lg font-bold flex whitespace-pre-wrap justify-center items-center h-full text-center">
                                    <p>{movie?.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
