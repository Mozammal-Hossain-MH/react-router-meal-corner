import React from 'react';
import './Homepage.css';
import { BookOpenIcon, TruckIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/solid'

const HomePage = () => {
    return (
        <div >
            <div className='home-page'>
                <div className='text-white text-center background pt-16 sm:pt-28 lg:pt-36 xl:pt-56' >
                    <h1 className='text-2xl sm:text-4xl lg:text-5xl  font-bold mb-3 sm:mb-4 lg:mb-5'>Food With a Purpose!</h1>
                    <p className='w-11/12 sm:w-9/12 lg:w-1/2  text-xs sm:text-base text-center m-auto'>Welcome to Meal Corner. Its our culinary haven, where passion for flavors meets the art of dining! Indulge your senses in a symphony of tastes and textures as we take you on a gastronomic journey through our delectable food offerings.</p>
                    <button className='bg-yellow-600 m-5 py-1 px-10 rounded-md border-b-4 border-solid border-yellow-800 hover:bg-yellow-500'>Learn More</button>
                </div>
                <div>
                    <p className='text-5xl text-center text-gray-500 my-20'>How It <span className='font-bold'>Works?</span></p>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-5 lg:w-10/12 lg:m-auto'>
                        <div className='w-9/12 text-center m-auto mb-10 hover:text-blue-500'>
                            <div className='border-2 border-solid border-yellow-700 w-20 h-20 rounded-full m-auto mb-5'>
                                <BookOpenIcon className="h-10 w-10 text-black m-auto mt-5 hover:text-blue-500" />
                            </div>

                            <p className='w-8/12 lg:w-11/12 text-lg m-auto'>Sign in and choose from our weekly menu</p>
                        </div>
                        <div className='w-9/12 text-center m-auto mb-10 hover:text-blue-500'>
                            <div className='border-2 border-solid border-yellow-700 w-20 h-20 rounded-full m-auto mb-5'>
                                <TruckIcon className="h-10 w-10 text-black m-auto mt-5 hover:text-blue-500" />
                            </div>

                            <p className='w-8/12 text-lg m-auto'>We will deliver your purchase</p>
                        </div>
                        <div className='w-9/12 text-center m-auto mb-10 hover:text-blue-500'>
                            <div className='border-2 border-solid border-yellow-700 w-20 h-20 rounded-full m-auto mb-5'>
                                <AdjustmentsVerticalIcon className="h-10 w-10 text-black m-auto mt-5 hover:text-blue-500" />
                            </div>

                            <p className='w-8/12 text-lg m-auto'>Enjoy our tasty organic food! </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePage;