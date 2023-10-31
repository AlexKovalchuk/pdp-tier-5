import { Component } from '@angular/core';
import { ApiService } from './core/services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdp-tier-5';
  public isSignedIn:boolean = false;
  constructor(
    private apiService: ApiService
  ) { }
  ngOnInit() {
    this.isSignedIn = this.apiService.isLoggedIn();
    console.log('isSignedIn', this.isSignedIn);
  }
}
