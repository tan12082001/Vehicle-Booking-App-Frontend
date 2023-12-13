import {
  MY_RESERVATIONS,
  USERDASHBOARDHOME,
  ADD_NEW_CAR,
  CONTACT,
  DELETE_CAR,
} from '../../../routes/routeConstants';

const navConfig = [
  {
    title: 'Dashboard',
    path: USERDASHBOARDHOME,
  },

  {
    title: 'My Reservations',
    path: MY_RESERVATIONS,
  },
  {
    title: 'Add New Car',
    path: ADD_NEW_CAR,
  },

  {
    title: 'Delete Car',
    path: DELETE_CAR,
  },

  {
    title: 'Contact',
    path: CONTACT,
  },
];

export default navConfig;
