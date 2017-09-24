import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PluginsComponent } from "./plugins.component";
import { EchartsComponent } from "./echarts/echarts.component";
import { MarkdownComponent } from './markdown/markdown.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'e',
    pathMatch: 'full'
  },
  {
        path: '', component: PluginsComponent, children: [
            { path: 'e', component: EchartsComponent },
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
