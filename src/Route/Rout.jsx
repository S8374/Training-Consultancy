import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import RootHome from "../Components/Home/HomeRoot/RootHome";
import AboutUs from "../Components/AboutUs/AboutUs";
import Serv from "../Components/Servises/Serv/Sev";
import Contact from "../Components/Contact/Contact";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            { 
                path: "/", 
                element: <RootHome />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs/>,
            },
            {
                path: "/services/:id",
                element:  <Serv/>,
            }
            ,
            {
                path: "/services",
                element:  <Serv/>,
            },
            {
                path:'/contact',
                element: <Contact/>,
            }
        ],
    },
]);