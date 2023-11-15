import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { increment, decrement, reset } from '../../core/store/actions/counter.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public count$: Observable<number>;

 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
 
  ngOnInit(): void {
    
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
