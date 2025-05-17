import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../routes/home/Home"));
const SignIn = lazy(() => import("../routes/signIn/SignIn"));
const SignUp = lazy(() => import("../routes/signUp/SignUp"));

const RoutesController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    }
  ]);
};

export default RoutesController;
