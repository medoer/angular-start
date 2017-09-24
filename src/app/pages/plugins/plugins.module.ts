import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularEchartsModule } from "ngx-echarts";
import { AngularEchartsDirective } from "ngx-echarts";

import { NgZorroAntdModule } from "ng-zorro-antd";

import { PluginsComponent } from "./plugins.component";
import { EchartsComponent } from "./echarts/echarts.component";
import { MarkdownComponent } from "./markdown/markdown.component";
import { PluginsRoutingModule } from './plugins-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PluginsRoutingModule,
    AngularEchartsModule
  ],
  declarations: [
    MarkdownComponent,
    EchartsComponent,
    PluginsComponent
  ]
})
export class PluginsModule { }
