import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import routes from './routes'

// TODO: можно прописывать 
const createAppRouter = () => {
  const router = createRouter(routes);
  router.usePlugin(browserPlugin());
  return router
};

export default createAppRouter;
