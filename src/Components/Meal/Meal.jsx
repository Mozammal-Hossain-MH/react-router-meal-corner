import React from 'react';

const Meal = ({ meal }) => {
    return (
        <div className='w-10/12 m-auto border-2 border-gray-200 border-solid rounded-md mb-5'>
            <img className='w-full' src={meal.strMealThumb} />
            <p className='font-medium my-3 text-xl ml-3'>{meal.strMeal}</p>
            <p className='font-medium my-3 text-xl ml-3'>Id: {meal.idMeal}</p>

            <div className='cursor-pointer flex justify-center items-center border-t-2 border-gray-200 border-solid py-2 rounded-md hover:text-blue-500'>
                <p className='font-semibold  '>Order Now</p>
            </div>
        </div>
    );
};

export default Meal;