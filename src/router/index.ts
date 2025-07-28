import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";

const router = Router();

interface IModuleRoutes {
  path: string;
  element: Router;
}

const moduleRoutes: IModuleRoutes[] = [
  {
    path: "",
    element: UserRoutes,
  },
];

moduleRoutes.forEach((r) => {
  router.use(r.path, r.element);
});

const Routes = router;
export default Routes;
