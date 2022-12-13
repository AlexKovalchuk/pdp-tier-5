import { Injectable }                  from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {

  constructor() { }
  private sub: BehaviorSubject<string> = new BehaviorSubject<string>("");


  notify(message: string) {
    this.sub.next(message);
  }

  returnAsObservable() {
    return this.sub.asObservable();
  }
}
