import {
  // RESERVE_CARS,
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
    // icon: FourCubes(),
  },

  {
    title: 'My Reservations',
    path: MY_RESERVATIONS,
    // icon: JobsIcon(),
  },

  // {
  //   title: 'Reserve Cars',
  //   path: RESERVE_CARS,
  //   // icon: PlaneIcon(),
  // },

  {
    title: 'Add New Cars',
    path: ADD_NEW_CAR,
    // icon: PlaneIcon(),
  },

  {
    title: 'Delete Car',
    path: DELETE_CAR,
    // icon: PlaneIcon(),
  },

  {
    title: 'Contact',
    path: CONTACT,
    // icon: PlaneIcon(),
  },
];

export default navConfig;
