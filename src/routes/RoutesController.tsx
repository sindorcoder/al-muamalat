import { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Home = lazy(() => import("../routes/home/Home"));
const SignIn = lazy(() => import("../routes/signIn/SignIn"));
const SignUp = lazy(() => import("../routes/signUp/SignUp"));
const Navbar = lazy(() => import("../components/navbar/Navbar"));
const Education = lazy(() => import("../routes/education/Education"));

const RoutesController = () => {
  return useRoutes([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/education",
          element: <Education />,
        }
      ],
    },
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
  ]);
};

export default RoutesController;
