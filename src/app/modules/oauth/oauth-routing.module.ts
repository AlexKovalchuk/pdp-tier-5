import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent }        from './login/login.component';
import { DashboardComponent }    from './dashboard/dashboard.component';
import { GitAuthComponent }      from './git-auth/git-auth.component';
import { ExtUrlResolverService } from '../../services/extUrlResolver/ext-url-resolver.service';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'test',
    component: GitAuthComponent,
    resolve: {
      url: ExtUrlResolverService
    }
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OauthRoutingModule {}

