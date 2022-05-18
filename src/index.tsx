import { render } from "react-dom";
import App from "./view/UI/App";
import { RouterProvider } from "react-router5";
import createAppRouter from "./router";

const router = createAppRouter()
router.start()

//TODO: как получить store
// Store мы получаем в зависсимости от роутинга 

const rootElement = document.getElementById("root");
render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  rootElement
);
