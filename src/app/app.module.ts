import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { RouterModule } from "@angular/router";

import { AngularEchartsModule } from "ngx-echarts";
import { AngularEchartsDirective } from "ngx-echarts";

import { appRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { BreadcrumbComponent } from './pages/home/breadcrumb/breadcrumb.component';
import { EchartsComponent } from './pages/plugins/echarts/echarts.component';
import { IndexComponent } from './pages/home/index/index.component';
import { MarkdownComponent } from './pages/plugins/markdown/markdown.component';
import { EventBindingComponent } from './pages/angular-correlation/event-binding/event-binding.component';
import { AngularCorrelationComponent } from './pages/angular-correlation/angular-correlation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PluginsComponent,
    FooterComponent,
    BreadcrumbComponent,
    EchartsComponent,
    IndexComponent,
    MarkdownComponent,
    EventBindingComponent,
    AngularCorrelationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AngularEchartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
