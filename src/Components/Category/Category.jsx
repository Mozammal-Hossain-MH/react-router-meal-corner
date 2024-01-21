import React from 'react';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { strCategory, strCategoryThumb, strCategoryDescription } = category;
    return (
        <div className='w-10/12 m-auto border-2 border-gray-200 border-solid rounded-md mb-5'>
            <img className='w-full' src={strCategoryThumb} />

            <div className=' flex justify-center items-center border-t-2 border-gray-200 border-solid py-2 rounded-md hover:text-blue-500'>
                <p className='font-semibold  '>{strCategory}</p>
                <Link to={`/category/${strCategory}`}><ArrowRightEndOnRectangleIcon className="h-6 w-8 text-black hover:text-blue-500" /></Link>
            </div>


        </div>
    );
};

export default Category;