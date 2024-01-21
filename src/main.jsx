import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import HomePage from './Components/HomePage/HomePage';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import Pricing from './Components/Pricing/Pricing';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/menu',
        element: <Menu></Menu>,
        loader: () =>
          fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path:'/category/:categoryName',
        element: <CategoryDetails></CategoryDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`)
      },
      {
        path: '/pricing',
        element: <Pricing></Pricing>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
