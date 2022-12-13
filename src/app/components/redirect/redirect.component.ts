import { Component }    from '@angular/core';
import { OAuthService } from '../../services/oAuthService/oauth.service';
import {
  ActivatedRoute,
  Router
}                       from '@angular/router';
import { concatMap }    from 'rxjs';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: [ './redirect.component.scss' ]
})
export class RedirectComponent {
  constructor(
    private active: ActivatedRoute,
    private serv: OAuthService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.active.queryParamMap.pipe(concatMap(x => {
      console.log('queryParamMap', x)
      return this.serv.getAccessToken(x.get('code') as string)
    })).subscribe({
      next: data => this.router.navigate([ '/dashboard' ]),
      error: err => {console.log(err)}
    });

  }
}
