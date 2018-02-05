import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TitanService } from "./services/titan.service";
import 'hammerjs';
import { JsonSchemaFormModule, MaterialDesignFrameworkModule, Bootstrap4FrameworkModule, Bootstrap3FrameworkModule, 
  NoFrameworkModule     } from 'angular2-json-schema-form';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatCardModule, MatToolbarModule,
    MaterialDesignFrameworkModule , JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule),
    HttpClientModule  ],
  providers: [TitanService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }