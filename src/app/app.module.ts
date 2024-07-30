import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
>>>>>>> b3faff7f83a823fa44e8933e7b51c3cf9f730999



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent, 
    HomeComponent,      
    TestComponent
   
=======
    LoginComponent
>>>>>>> b3faff7f83a823fa44e8933e7b51c3cf9f730999
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
=======
    FormsModule
  ],
  providers: [],
>>>>>>> b3faff7f83a823fa44e8933e7b51c3cf9f730999
  bootstrap: [AppComponent]
})
export class AppModule { }
