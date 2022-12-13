import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
        <div className='flex items-center space-x-2 md:space-x-10'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer object-contain'>HORROX</h1>
            <ul className='hidden space-x-4 md:flex'>
                <li className='navLink'>Movies</li>
                <li className='navLink'>Series</li>
            </ul>
        </div>
        <div className='flex items-center space-x-4'>
            <FaSearch />
        </div>
    </header>
  )
}

export default Navbar;
