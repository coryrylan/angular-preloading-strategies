import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature-3-routing.module';
import { Feature3Component } from './feature-3.component';

@NgModule({
  imports: [
    CommonModule,
    Feature3RoutingModule
  ],
  declarations: [Feature3Component]
})
export class Feature3Module { }
