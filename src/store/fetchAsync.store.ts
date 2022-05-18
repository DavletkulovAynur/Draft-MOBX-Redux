import { action, makeObservable, observable } from "mobx";

class Store {
  //TODO: private не работает при makeObservable
  array: Array<{ id: string }> = [];
  constructor() {
    makeObservable(this, {
      array: observable,
      getFetch: action,
    });
  }

  getFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => (this.array = data));
  };
}

export const FetchAsyncStore = new Store();
