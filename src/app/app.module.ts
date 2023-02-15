import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexmonsterPivotModule } from 'ng-flexmonster';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboardcomponent } from './Dashboard/Dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    Dashboardcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexmonsterPivotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
