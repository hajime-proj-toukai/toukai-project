
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import NotFound from '../pages/NotFound';
import CareersPage from '../pages/careers/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/careers',
    element: <CareersPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
