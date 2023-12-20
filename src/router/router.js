import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from '../pages/homePage/HomePage';
import BlogPage from "../pages/blogPage/blogPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path : '/blog',
      element: <BlogPage/>,
      children : [
        {
            path : '/blog/test',
            element : <p>its test address</p>
        },
        {
            path : '/blog/:id',
            element : <p>its for id page</p>
        }
        
      ]
    }
  ]);

export {router}