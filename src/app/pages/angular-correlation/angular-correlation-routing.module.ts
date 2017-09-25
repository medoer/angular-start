import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCorrelationComponent } from "./angular-correlation.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { StructuralDeriectivesComponent } from './structural-deriectives/structural-deriectives.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'event-binding',
    pathMatch: 'full'
  },
  {
    path: '', component: AngularCorrelationComponent, children: [
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'structural-deriectives', component: StructuralDeriectivesComponent },
    ]
  },
  {
    path: '**',
    component: AngularCorrelationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularCorrelationRoutingModule { }
