import { ReplaySubject } from "rxjs";

class Facade {
  constructor() {
    this.stream$ = new ReplaySubject(1);
    this.state = this.initialize();
    this.stream$.next(this.state);
  }

  initialize() {
    let state = localStorage.getItem('state');
    if (state === null) {
      localStorage.setItem('state', JSON.stringify([]));
      state = localStorage.getItem('state');
    }
    return JSON.parse(state);
  }

  getItem() {
    return this.stream$;
  }

  setItem(addresses) {
    localStorage.setItem('state', JSON.stringify([...this.state, addresses]));
    this.state = JSON.parse(localStorage.getItem('state'));
    this.stream$.next(this.state);
  }
};

const facade = new Facade();
export default facade;