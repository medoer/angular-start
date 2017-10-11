import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PluginsComponent } from "./plugins.component";
import { EchartsComponent } from "./echarts/echarts.component";
import { MarkdownComponent } from './markdown/markdown.component';
import { CreateGraphComponent } from './echarts/create-graph/create-graph.component';
import { DesignComponent } from './echarts/design/design.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'e',
    pathMatch: 'full'
  },
  {
    path: '', component: PluginsComponent, children: [
      { path: 'e', component: EchartsComponent },
      { path: 'create', component: CreateGraphComponent },
      { path: 'design', component: DesignComponent },
      { path: 'e3', component: EchartsComponent },
      { path: 'markdown', component: MarkdownComponent },
    ]
  },
  {
    path: '**',
    component: PluginsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsRoutingModule { }
