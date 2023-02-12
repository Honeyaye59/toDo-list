import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {InputTextModule} from 'primeng/inputtext';

import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AddDataService } from './service/add-data.service';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    
  ],
  providers: [AddDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
