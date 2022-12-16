import { FaStar } from "react-icons/fa";

const Movie = ({ item }) => {
  const movieDetail = `https://www.themoviedb.org/movie/${item?.id}`;
  const handleClick = () => {
    window.open(movieDetail, '_blank');
  };
  return (
      <div onClick={handleClick} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
          <img
              className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item?.poster_path}`}
              alt={item?.title}
          />
          <div className="flex items-center justify-center space-x-1 text-yellow-300 text-s md:text-l bg-[#290606af] ">
              <FaStar className="mr-1"/>
              {item?.vote_average}
          </div>
          <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
              <div className="white-space-normal text-white text-md md:text-xl font-bold flex justify-center items-center h-full text-center">
              More Info
              </div>
          </div>
      </div>
    
  );
};

export default Movie;
