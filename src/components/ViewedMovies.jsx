import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const ViewedMovies = ({ title }) => {
    const [recentlyViewedMovies, setRecentlyViewedMovies] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const storedMovies =
                JSON.parse(localStorage.getItem("recentlyViewedMovies")) || [];
            setRecentlyViewedMovies(storedMovies);
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 300;
    };
    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 300;
    };

    return (
        <>
            <div className="w-full md:w-10/12 p-2 mx-auto justify-center">
                <h2 className="text-white font-bold md:text-xl p-3 mb-2 mt-2 bg-gradient-to-r from-red-900 to-transparent rounded">
                    {title}
                </h2>
                <div className="relative flex items-center group p-3">
                    <MdChevronLeft
                        onClick={slideLeft}
                        className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                        size={40}
                    />
                    <div
                        id={"slider"}
                        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                    >
                        {recentlyViewedMovies.map((item, id) => (
                            <a
                                href={`https://www.themoviedb.org/movie/${item?.id}`}
                                target="_blank"
                                rel="noreferrer"
                                key={id}
                                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2"
                            >
                                <div>
                                    <img
                                        className="w-full h-auto block shadow-md rounded-lg"
                                        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                                        alt={item?.title}
                                    />
                                    <div
                                        className="w-full flex items-center justify-center space-x-1 text-yellow-300 text-sm md:text-base
                                        bg-[#290606af] absolute bottom-0 rounded-b-lg"
                                    >
                                        <FaStar className="mr-1" />
                                        <p>{item?.vote_average}</p>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 transition duration-300 opacity-0 hover:opacity-100 text-white rounded-lg">
                                    <div className="text-white text-sm md:text-lg font-bold flex whitespace-pre-wrap justify-center items-center h-full text-center">
                                        <p>{item?.title}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                        {recentlyViewedMovies.length <= 0 && (
                            <p className="text-center text-white whitespace-pre-wrap italic">
                                You have no viewed movies yet...
                            </p>
                        )}
                    </div>
                    <MdChevronRight
                        onClick={slideRight}
                        className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                        size={40}
                    />
                </div>
            </div>
        </>
    );
};

export default ViewedMovies;
