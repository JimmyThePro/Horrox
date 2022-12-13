import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer object-contain">
          HORROX
        </h1>
        <ul className="hidden space-x-4 md:flex">
          <li className="navLink">Movies</li>
          <li className="navLink">Series</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <FaSearch />
      </div>
    </header>
  );
};

export default Navbar;
