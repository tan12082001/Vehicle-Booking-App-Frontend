import { Navigate, useRoutes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import AuthLayout from '../layout/Auth/AuthLayout';
import LandingPageLayout from '../layout/LandingPage/LandingPageLayout';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';
import SignIn from '../pages/Auth/SignIn/SignIn';
import SignUp from '../pages/Auth/SignUp/SignUp';
import NotFound404 from '../pages/NotFound404';
import MyReservations from '../pages/LandingPage/MyReservation/MyReservation';
import ReserveCars from '../pages/LandingPage/ReserveCars/ReserveCars';
import ItemDetail from '../pages/UserDashboard/ItemDetail/ItemDetail';
import Home from '../pages/LandingPage/Home/Home';
import {
  ACCOUNT,
  SIGNIN,
  SIGNUP,
  FORGOT_PASSWORD,
  MY_RESERVATIONS,
  HOME,
  RESERVE_CARS,
  USERDASHBOARDHOME,
  USERS_DASHBOARD,
  ADD_NEW_CAR,
  DELETE_CAR,
  ITEM_DETAIL,
  CONTACT,
  NOTFOUND,
} from './routeConstants';
import UsersDashboardLayout from '../layout/UsersDashboard/UsersDashboardLayout';
import DashboardHome from '../pages/UserDashboard/DashboardHome';
import AddNewCar from '../pages/UserDashboard/AddNewCar/AddNewCar';
import Contact from '../pages/LandingPage/Contact/Contact';
import DeleteList from '../components/DeleteCars/DeleteList';
// import LoadingText from '../pages/LoadingText';

export default function Router() {
  const authenticationStatus = useSelector((state) => state.authentication.status);
  const isAuthenticated = authenticationStatus === 'succeeded';
  // const isLoading = authenticationStatus === 'loading';

  return useRoutes([
    {
      path: HOME,
      element: <LandingPageLayout />,
      children: [
        { path: HOME, element: <Home /> },
      ],
    },

    // isLoading && {
    //   path: USERS_DASHBOARD,
    //   element: <LoadingText />,
    // },

    isAuthenticated && {
      path: USERS_DASHBOARD,
      element: <UsersDashboardLayout />,
      children: [
        { path: USERS_DASHBOARD, element: <Navigate to={USERDASHBOARDHOME} /> },
        { path: USERDASHBOARDHOME, element: <DashboardHome /> },
        { path: MY_RESERVATIONS, element: <MyReservations /> },
        { path: RESERVE_CARS, element: <ReserveCars /> },
        { path: ADD_NEW_CAR, element: <AddNewCar /> },
        { path: `${ITEM_DETAIL}/:id`, element: <ItemDetail /> },
        { path: DELETE_CAR, element: <DeleteList /> },
        { path: CONTACT, element: <Contact /> },

        { path: NOTFOUND, element: <NotFound404 /> },
        { path: '*', element: <Navigate to={`/${NOTFOUND}`} replace /> },
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
