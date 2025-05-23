import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import RootHome from "../Components/Home/HomeRoot/RootHome";
import AboutUs from "../Components/AboutUs/AboutUs";
import Serv from "../Components/Servises/Serv/Sev";
import Contact from "../Components/Contact/Contact";
import Login from "../Components/CreateUser/Login/Login";
import SignUp from "../Components/CreateUser/SignUp/SignUp";
import PrivateRoute from "../Private/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import AddServices from "../Components/Dashboard/Services/Addservices/AddServices";
import UserApplied from "../Components/CreateUser/userApplied/userApplied";
import Applied from "../Components/Dashboard/Services/Applied/Applied";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RootHome />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Serv />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Serv />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/applied",
        element: <UserApplied />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard/add_services",
            element: <AddServices />,
          },
          {
            path: "/dashboard/Applied",
            element: <Applied />,
          }
        ],
      },
    ],
  },
]);
