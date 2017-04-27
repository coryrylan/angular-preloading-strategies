import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature-2-routing.module';
import { Feature2Component } from './feature-2.component';

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  declarations: [Feature2Component]
})
export class Feature2Module { }
