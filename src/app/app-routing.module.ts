import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { AhmadfarazComponent } from './ahmadfaraz/ahmadfaraz.component';
import { IbneinshaComponent } from './ibneinsha/ibneinsha.component';
import { IntizarHussainComponent } from './intizar-hussain/intizar-hussain.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'poetry',
    component: SignupComponent
  },
  {
    path:'famouspoetry',
    component: SigninComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'ahmadfaraz',
    component: AhmadfarazComponent
  },
  {
  path:'ibneinsha',
  component: IbneinshaComponent
  },
  {
    path:'intizarHussain',
    component: IntizarHussainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
