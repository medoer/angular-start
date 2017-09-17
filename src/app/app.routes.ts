import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AngularEchartsModule } from "ngx-echarts";
import { AngularEchartsDirective } from "ngx-echarts";

import { HomeComponent } from "./pages/home/home.component";
import { PluginsComponent } from './pages/plugins/plugins.component';
import { EchartsComponent } from "./pages/plugins/echarts/echarts.component";
import { IndexComponent } from "./pages/home/index/index.component";
import { MarkdownComponent } from "./pages/plugins/markdown/markdown.component";

export class AppRoutes {
}

export const appRoutes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'index', component: IndexComponent },
    {
        path: 'plugins', component: PluginsComponent, children: [
            { path: 'e', component: EchartsComponent },
            { path: 'markdown', component: MarkdownComponent },
        ]
    },
]
