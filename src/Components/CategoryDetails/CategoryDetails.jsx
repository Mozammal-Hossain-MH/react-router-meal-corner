import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Meal from '../Meal/Meal';

const CategoryDetails = () => {

    const { meals } = useLoaderData();
    console.log(meals);

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <div className='flex justify-between items-center my-20 mx-5'>
                <p className='font-bold sm:text-lg lg:text-5xl'>Choose Your Special Meal Today!</p>
                <button onClick={handleGoBack} className='bg-yellow-500 m-5 py-1 px-10 rounded-md border-b-4 border-solid border-yellow-800 hover:bg-yellow-400 text-white'>Go Back</button>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;