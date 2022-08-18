import { Observable, ReplaySubject, of } from 'rxjs';
import initializeState from './initializeState';

class BalanceWatcher {
  private watchList$: ReplaySubject<unknown>;

  private state: [];

  constructor() {
    this.watchList$ = new ReplaySubject(1);
    this.state = initializeState();
    this.watchList$.next(this.state);
  }

  getWatchList() {
    return this.watchList$;
    // return  this.watchList$.pipe(map(() => { throw new Error('qweqwe asdasd qweqwe')}));
  }

  addWatchItem(addresses: string[]) {
    localStorage.setItem('state', JSON.stringify([...this.state, addresses]));
    const state = localStorage.getItem('state');
    this.state = JSON.parse(state!);
    this.watchList$.next(this.state);
  }

  getBalance(watchItem: string[]) {
    console.log('watchItem', watchItem, this);
    return of(1000);
    // return  this.watchList$.pipe(map(() => { throw new Error('qweqwe asdasd qweqwe')}));
  }
}

const balanceWatcher = new BalanceWatcher();
export default balanceWatcher;
