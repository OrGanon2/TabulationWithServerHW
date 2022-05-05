import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Person1Component } from './Components/person1/person1.component';
import {HttpClientModule}from '@angular/common/http' 
import { Routes,RouterModule,} from '@angular/router';
import { PersonDetailComponent } from './Components/person-detail/person-detail.component';
const appRoutes:Routes = [
  {path:'',component:Person1Component},
  {path:'person1',component:Person1Component},
  {path:'person-detail/:id',component:PersonDetailComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    Person1Component,
    PersonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
