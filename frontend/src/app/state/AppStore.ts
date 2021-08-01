import { makeAutoObservable } from 'mobx';

import { ExampleStore } from 'src/example-concern/state/ExampleStore';

export class AppStore {
  exampleStore: ExampleStore = new ExampleStore();

  constructor() {
    makeAutoObservable(this);
  }
}
