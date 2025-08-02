import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { IModuleRoutes } from '../interfaces';
import { AuthRouter } from '../modules/auth/auth.route';
import { RideRoutes } from '../modules/ride/ride.route';
import { DriverRoutes } from '../modules/driver/driver.route';

const router = Router();

const moduleRoutes: IModuleRoutes[] = [
  {
    path: 'auth',
    element: AuthRouter,
  },
  {
    path: 'user',
    element: UserRoutes,
  },
  {
    path: 'rides',
    element: RideRoutes,
  },
  {
    path: 'drivers',
    element: DriverRoutes,
  },
];

moduleRoutes.forEach((r) => {
  router.use(`/${r.path}`, r.element);
});

export const Routes = router;
