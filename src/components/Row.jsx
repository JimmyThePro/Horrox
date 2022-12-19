import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(fetchURL);
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [fetchURL]);

    const slideLeft = () => {
        let slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft - 300;
    };
    const slideRight = () => {
        let slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft + 300;
    };

    return (
        <div className="w-full md:w-10/12 p-2 mx-auto justify-center">
            <h2 className="text-white font-bold md:text-xl p-3 mb-2 mt-2 bg-gradient-to-r from-red-900 to-transparent rounded">{title}</h2>
            <div className="relative flex items-center group p-3">
                <MdChevronLeft
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div
                    id={"slider" + rowID}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                >
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
            </div>
        </div>
    );
};

export default Row;
