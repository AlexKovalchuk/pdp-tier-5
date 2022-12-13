import { Component }              from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService }           from '../../../services/oAuthService/oauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent {
  public username: string = '';
  public user: any;

  constructor(
    private active: ActivatedRoute,
    private serv: OAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.serv.getUserDetails().subscribe({
      next: data => {
        console.log('GetUserDetails data:', data);
        this.username = data['login'] as string
        this.user = { ...data };
      },
      error: err => {
        console.log('getUserDetails Error:', err)
      }
    });
  }

  logout() {
    this.serv.logout().subscribe(data => this.router.navigate([ '/login' ]), err => {
      console.log(err)
    });
  }

}
