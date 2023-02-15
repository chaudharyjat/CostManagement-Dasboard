import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexmonsterPivotModule } from 'ng-flexmonster';
import { Dashboardcomponent } from './Dashboard/Dashboard.component';

const routes: Routes = [
  {path : "dashboard", component: Dashboardcomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FlexmonsterPivotModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
