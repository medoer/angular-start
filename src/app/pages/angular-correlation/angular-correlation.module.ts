import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";

import { AngularCorrelationRoutingModule } from './angular-correlation-routing.module';
import { AngularCorrelationComponent } from "./angular-correlation.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { StructuralDeriectivesComponent } from './structural-deriectives/structural-deriectives.component';
import { AngularRouterComponent } from './angular-router/angular-router.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularCorrelationRoutingModule
  ],
  declarations: [
    AngularCorrelationComponent,
    EventBindingComponent,
    StructuralDeriectivesComponent,
    AngularRouterComponent
  ]
})
export class AngularCorrelationModule { }
