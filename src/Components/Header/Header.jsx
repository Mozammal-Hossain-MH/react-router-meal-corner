import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className=' sticky top-0 h-20 bg-gray-100 lg:flex lg:justify-between lg:items-center shadow-md'>

            <div className='flex justify-between items-center'>
                <p className='text-2xl mt-5 lg:mt-auto font-extrabold shadow-md sm:ml-20'>Meal <span className='text-green-600 '>Corner</span></p>

                <div className='lg:hidden' onClick={() => setOpen(!open)}>
                    {
                        open === true ? <XMarkIcon className="h-10 w-10 text-black mt-5 mr-3 hover:text-blue-500" />
                            : <Bars3Icon className="h-10 w-10 text-black mt-5 mr-3 hover:text-blue-500" />
                    }
                </div>
            </div>


            <div className={`navbar flex flex-col items-center lg:mt-0 lg:block absolute lg:static ${open ? 'top-20 left-0' : '-top-96 left-0'}`} >
                <Link to="/">Home</Link>
                <Link to="/menu">On The Menu</Link>
                <Link to="/pricing">Sign Up & Pricing</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <button className='px-3 lg:w-auto lg:ml-10 py-1 rounded-md font-semibold hover:bg-gray-300 focus:bg-gray-200 '>LOG IN</button>
                <button className='lg:mr-5 lg:ml-3 lg:w-auto border-2 border-solid font-semibold border-red-100 rounded-md bg-yellow-100 px-3 py-1 hover:bg-yellow-300 focus:bg-yellow-200'>SIGN UP</button>
            </div>

            
        </nav>
    );
};

export default Header;