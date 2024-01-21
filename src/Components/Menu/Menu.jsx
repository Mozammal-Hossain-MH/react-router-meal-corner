import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Menu = () => {

    const { categories } = useLoaderData();

    return (
        <div>
            <h1 className='text-center my-20 text-3xl font-black'>Our Menu Categories:</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 '>
                {
                    categories.map(category => <Category
                        key={category.idCategory}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Menu;