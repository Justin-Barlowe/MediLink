import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './security/signin/signin.component';

export const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'signin',
  component: SigninComponent
}

];
