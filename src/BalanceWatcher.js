import { ReplaySubject } from "rxjs";
import { of } from 'rxjs';

class BalanceWatcher {
  constructor() {
    this.watchList$ = new ReplaySubject(1);
    this.state = this.initializeState();
    this.watchList$.next(this.state);
  }

  initializeState() {
    let state = localStorage.getItem('state');
    if (state === null) {
      localStorage.setItem('state', JSON.stringify([]));
      state = localStorage.getItem('state');
    }
    return JSON.parse(state);
  }

  getWatchList() {
    return this.watchList$;
    // return this.stream$.pipe(map(() => { throw new Error('qweqwe asdasd qweqwe')}));
  }

  addWatchItem(addresses) {
    localStorage.setItem('state', JSON.stringify([...this.state, addresses]));
    this.state = JSON.parse(localStorage.getItem('state'));
    this.watchList$.next(this.state);
  }

  getBalance(watchItem) {
    return of(1000);
  }
};

const balanceWatcher = new BalanceWatcher();
export default balanceWatcher;