import { ReplaySubject, of } from 'rxjs';

class BalanceWatcher {
  private watchList$: ReplaySubject<unknown>;

  private state: [];

  constructor() {
    this.watchList$ = new ReplaySubject(1);
    this.state = this.initializeState();
    this.watchList$.next(this.state);
  }

  initializeState(): any {
    let state = localStorage.getItem('state');
    if (state === null) {
      localStorage.setItem('state', JSON.stringify([]));
      state = localStorage.getItem('state');
    }
    return JSON.parse(state);
  }

  getWatchList() {
    return this.watchList$;
    // return  this.watchList$.pipe(map(() => { throw new Error('qweqwe asdasd qweqwe')}));
  }

  addWatchItem(addresses: string[]) {
    localStorage.setItem('state', JSON.stringify([...this.state, addresses]));
    this.state = JSON.parse(localStorage.getItem('state'));
    this.watchList$.next(this.state);
  }

  getBalance(watchItem: string[]) {
    console.log('watchItem', watchItem);
    return of(1000);
    // return  this.watchList$.pipe(map(() => { throw new Error('qweqwe asdasd qweqwe')}));
  }
}

const balanceWatcher = new BalanceWatcher();
export default balanceWatcher;
