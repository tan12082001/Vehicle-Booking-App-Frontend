// import FourCubes from '../../../components/Icons/FourCubes';
// import JobsIcon from '../../../components/Icons/JobsIcon';
// import PlaneIcon from '../../../components/Icons/PlaneIcon';
// import SettingsIcon from '../../../components/Icons/SettingsIcon';
import {
  RESERVED_CARS,
  MY_RESERVATIONS,
  USERDASHBOARDHOME,
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
];

export default navConfig;
