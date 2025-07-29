import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { IModuleRoutes } from '../interfaces';
import { AuthRouter } from '../modules/auth/auth.route';
import { RideRoutes } from '../modules/ride/ride.route';

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
    path: 'ride',
    element: RideRoutes,
  },
];

moduleRoutes.forEach((r) => {
  router.use(`/${r.path}`, r.element);
});

export const Routes = router;
