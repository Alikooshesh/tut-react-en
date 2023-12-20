import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from '../pages/homePage/HomePage';
import CountryPage from "../pages/countryPage/CountryPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/country",
        element: <CountryPage/>,
        children : [
            {
                path:'/country/:cca2',
                children : [
                    {
                        path: '/country/:cca2/weather'
                    }
                ]
            }
        ]
    }
    
  ]);

export {router}