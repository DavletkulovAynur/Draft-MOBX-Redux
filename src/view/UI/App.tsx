import { Suspense } from "react";
import Counter from "./pages/Counter";
import Main from "./pages/Main";
import { useRoute } from "react-router5";
import AsyncFetch from "./pages/asyncFetch";
import TS from "./pages/TS/TS";

const pages = {
  main: <Main />,
  counter: <Counter />,
  fetchAsync: <AsyncFetch />,
  ts: <TS/>
};

const App = () => {
  const {
    route: { name },
  } = useRoute();

  //FIXME: проверка свойства в объекте
  return (
    <>
      <Suspense fallback="loading">
        {pages[name as keyof typeof pages]}
      </Suspense>
    </>
  );
};

export default App;
