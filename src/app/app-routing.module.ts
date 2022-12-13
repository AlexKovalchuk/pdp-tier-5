import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RedirectComponent }     from './components/redirect/redirect.component';

const routes: Routes = [
  {
    path:'redirect',
      component: RedirectComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
