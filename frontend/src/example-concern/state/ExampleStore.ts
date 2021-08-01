import { makeAutoObservable } from 'mobx';

export class ExampleStore {

  constructor() {
    makeAutoObservable(this);
  }
}
