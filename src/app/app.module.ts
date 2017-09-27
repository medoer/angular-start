import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { RouterModule, PreloadAllModules, NoPreloading } from "@angular/router";
import { PreloadModulesStrategy } from "./common/preload-modules-strategy";

import { appRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/home/header/header.component';

import { FooterComponent } from './pages/home/footer/footer.component';
import { BreadcrumbComponent } from './pages/home/breadcrumb/breadcrumb.component';
import { IndexComponent } from './pages/home/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadModulesStrategy})
  ],
  providers: [
    PreloadModulesStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
