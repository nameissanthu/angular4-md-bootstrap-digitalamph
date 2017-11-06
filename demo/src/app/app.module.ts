import { GridtwoComponent } from './gridtwo/gridtwo.component';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { NavbarrComponent } from './navbar/navbar.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { MDBBootstrapModule } from '../../../src';

@NgModule({
  declarations: [
    AppComponent,
    NavbarrComponent,
    HomeComponent,
    GridComponent,
    CardComponent,
    GridtwoComponent
  
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    Ng2CarouselamosModule,
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
