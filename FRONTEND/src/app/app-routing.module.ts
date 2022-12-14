import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { IncidentsComponent } from './components/incidents/incidents.component';
import { PrivateIncidentsComponent } from './components/private-incidents/private-incidents.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/incidents',
    pathMatch: 'full'
  },

  {
    path: 'incidents',
    component: IncidentsComponent
  },
  {
    path: 'private',
    component: PrivateIncidentsComponent ,
    canActivate : [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
