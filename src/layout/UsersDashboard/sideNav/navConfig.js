import {
  RESERVED_CARS,
  MY_RESERVATIONS,
  USERDASHBOARDHOME,
  ADD_NEW_CAR,
  DELETE_RESERVATION,
  CONTACT
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

  {
    title: 'Reserved Cars',
    path: RESERVED_CARS,
    // icon: PlaneIcon(),
  },

  {
    title: 'Add New Cars',
    path: ADD_NEW_CAR,
    // icon: PlaneIcon(),
  },

  {
    title: 'Delete Reservation',
    path: DELETE_RESERVATION,
    // icon: PlaneIcon(),
  },

  {
    title: 'Contact',
    path: CONTACT,
    // icon: PlaneIcon(),
  },
];

export default navConfig;
