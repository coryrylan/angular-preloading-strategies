import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature2Component } from './feature-2.component';

const routes: Routes = [
  { path: '', component: Feature2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
