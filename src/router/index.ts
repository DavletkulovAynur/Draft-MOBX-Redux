import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import routes from './routes'

// TODO: middlewaries
const createAppRouter = () => {
  const router = createRouter(routes);
  //TODO: browserPlugin???
  router.usePlugin(browserPlugin());
  return router
};

export default createAppRouter;
