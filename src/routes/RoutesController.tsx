import { lazy, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";

const Home = lazy(() => import("../routes/home/Home"));
const SignIn = lazy(() => import("../routes/signIn/SignIn"));
const SignUp = lazy(() => import("../routes/signUp/SignUp"));
const Navbar = lazy(() => import("../components/navbar/Navbar"));
const Education = lazy(() => import("../routes/education/Education"));
const Contact = lazy(() => import("../routes/contact/Contact"));
const RoutesController = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        },
        {
          path: "/contact",
          element: <Contact />,
        },
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
