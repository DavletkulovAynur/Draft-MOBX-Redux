import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
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
