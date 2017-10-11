import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";
import { AngularEchartsModule } from "ngx-echarts";

import { PluginsComponent } from "./plugins.component";
import { EchartsComponent } from "./echarts/echarts.component";
import { MarkdownComponent } from "./markdown/markdown.component";
import { PluginsRoutingModule } from './plugins-routing.module';
import { CreateGraphComponent } from './echarts/create-graph/create-graph.component';
import { DesignComponent } from './echarts/design/design.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PluginsRoutingModule,
    AngularEchartsModule
  ],
  declarations: [
    MarkdownComponent,
    EchartsComponent,
    PluginsComponent,
    CreateGraphComponent,
    DesignComponent
  ]
})
export class PluginsModule { }
