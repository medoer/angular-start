import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from "./pages/home/home.component";
import { IndexComponent } from "./pages/home/index/index.component";

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
        path: 'plugins', 
        loadChildren: './pages/plugins/plugins.module#PluginsModule'
    },
    {
        path: 'angular-correlation', 
        loadChildren: './pages/angular-correlation/angular-correlation.module#AngularCorrelationModule'
    },
    {
        path: '**', component: IndexComponent
    }
]
