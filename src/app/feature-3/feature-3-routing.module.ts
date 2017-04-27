import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature3Component } from './feature-3.component';

const routes: Routes = [
  { path: '', component: Feature3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature3RoutingModule { }
