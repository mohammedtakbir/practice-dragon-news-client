import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import News from "../Pages/News/News";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                loader: () =>  fetch(`http://localhost:5001/news`),
                element: <Home />
            },
            {
                path: '/home',
                loader: () =>  fetch(`http://localhost:5001/news`),
                element: <Home />
            },
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5001/category/${params.id}`),
                element: <Category />
            },
            {
                path: '/news/:id',
                loader: ({params}) => fetch(`http://localhost:5001/news/${params.id}`),
                element: <News />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])