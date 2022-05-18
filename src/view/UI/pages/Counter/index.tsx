import { observer } from "mobx-react-lite";
import { counterStore } from "../../../../store/counter.store";
import { useRoute } from "react-router5";

const Counter = () => {
  const route = useRoute()
  console.log('route', route)
  return (
    <div className="App">
      <h1>HELLO COUNTER</h1>
      <h1>{counterStore.count}</h1>
      <h1>{counterStore.double}</h1>
      
      <button onClick={counterStore.inc}>+</button>
      <button onClick={counterStore.dec}>-</button>
    </div>
  );
};

export default observer(Counter);
