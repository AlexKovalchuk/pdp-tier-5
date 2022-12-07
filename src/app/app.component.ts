import { Component }                   from '@angular/core';
import { Store }                       from '@ngrx/store';
import { increment, decrement, reset } from './store/counter/counter.actions';
import { Observable }                  from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdp-tier-5';
  public count$: Observable<number>;
  public login$: Observable<any>;

  constructor(private store: Store<{ count: number, login: any }>) {
    this.count$ = store.select('count');
    this.login$ = store.select('login');

    this.count$.subscribe(value => {
      // console.log('counter', value)
    })
    this.login$.subscribe(value => {
      // console.log('login', value)
    })
  }
}
