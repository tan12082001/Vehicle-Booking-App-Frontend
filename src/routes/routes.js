import { Navigate, useRoutes } from 'react-router-dom';

import AuthLayout from '../layout/Auth/AuthLayout';
import LandingPageLayout from '../layout/LandingPage/LandingPageLayout';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';
import SignIn from '../pages/Auth/SignIn/SignIn';
import SignUp from '../pages/Auth/SignUp/SignUp';
import NotFound404 from '../pages/NotFound404';
import MyReservations from '../pages/LandingPage/MyReservation/MyReservation';
import ReserveCars from '../pages/LandingPage/ReserveCars/ReserveCars';
import Home from '../pages/LandingPage/Home/Home';
import {
  ACCOUNT,
  SIGNIN,
  SIGNUP,
  FORGOT_PASSWORD,
  MY_RESERVATIONS,
  HOME,
  RESERVE_CARS,
  NOTFOUND,
} from './routeConstants';

export default function Router() {
  return useRoutes([
    {
      path: HOME,
      element: <LandingPageLayout />,
      children: [
        { path: HOME, element: <Home /> },
        { path: MY_RESERVATIONS, element: <MyReservations /> },
        { path: RESERVE_CARS, element: <ReserveCars /> },
      ],
    },

    {
      path: ACCOUNT,
      element: <AuthLayout />,
      children: [
        { path: SIGNIN, element: <SignIn /> },
        { path: SIGNUP, element: <SignUp /> },
        { path: FORGOT_PASSWORD, element: <ForgotPassword /> },

        { path: NOTFOUND, element: <NotFound404 /> },
        { path: '*', element: <Navigate to={`/${NOTFOUND}`} replace /> },
      ],
    },
    { path: '*', element: <NotFound404 /> },
  ]);
}
