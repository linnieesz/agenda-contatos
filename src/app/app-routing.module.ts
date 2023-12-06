import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { AboutComponent } from './pages/about/about.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'agenda-contatos', component: ContactListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent },
  { path: 'novo-contato', component: ContactInfoComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'perfil', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
