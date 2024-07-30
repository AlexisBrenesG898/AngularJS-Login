<<<<<<< HEAD
import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
 {
  path: 'login', component: LoginComponent
 },
 {
  path: 'register', component: RegisterComponent
 },
 {
  path: 'test', component: TestComponent
 },
 {
  path: 'home', component: HomeComponent,
  canActivate: [authGuard]
 },
 {
  path: '', redirectTo: 'home', pathMatch: 'full'
 }
];
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Add other routes as needed
];

>>>>>>> b3faff7f83a823fa44e8933e7b51c3cf9f730999
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
