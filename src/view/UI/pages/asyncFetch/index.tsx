import { observer } from "mobx-react-lite";
import { FetchAsyncStore } from "../../../../store/fetchAsync.store";


const AsyncFetch = () => {
  return (
    <>
      <h1>FETCH ASYNC</h1>
      {FetchAsyncStore.array.length && FetchAsyncStore.array.map((item) => {
        
        console.log(item.id)
        return (
          <div>
            <h1>test</h1>
          </div>
        )
      })}

      <button onClick={FetchAsyncStore.getFetch}>FETCH</button>
    </>
  )
}

export default observer(AsyncFetch)