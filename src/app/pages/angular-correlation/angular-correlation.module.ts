import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from "ng-zorro-antd";

import { AngularCorrelationRoutingModule } from './angular-correlation-routing.module';
import { AngularCorrelationComponent } from "./angular-correlation.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { StructuralDeriectivesComponent } from './structural-deriectives/structural-deriectives.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    AngularCorrelationRoutingModule
  ],
  declarations: [
    AngularCorrelationComponent,
    EventBindingComponent,
    StructuralDeriectivesComponent
  ]
})
export class AngularCorrelationModule { }
