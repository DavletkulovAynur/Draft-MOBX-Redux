import {
  action,
  autorun,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";

class Store {
  constructor() {
    // makeObservable(this, {
    //   count: observable,
    //   inc: action,
    //   dec: action,
    //   double: computed,
    // })
    makeAutoObservable(this);
  }

  private _count = 0;

  get count() {
    return this._count;
  }

  inc = () => {
    this._count++;
  };

  dec = () => {
    this._count--;
  };

  get double() {
    return this._count * 2;
  }
}

export const counterStore = new Store();
