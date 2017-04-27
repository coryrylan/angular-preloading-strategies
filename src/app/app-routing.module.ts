import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCustomPreloader } from './app-routing-loader';
import { Feature1Component } from './feature-1/feature-1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feature-1',
    pathMatch: 'full'
  },
  {
    path: 'feature-1',
    component: Feature1Component
  },
  {
    path: 'feature-2',
    loadChildren: './feature-2/feature-2.module#Feature2Module',
    data: { preload: true }
  },
  {
    path: 'feature-3',
    loadChildren: './feature-3/feature-3.module#Feature3Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
