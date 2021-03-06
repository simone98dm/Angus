import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../authentication/login/login.component';
import {PageNotFoundComponent} from '../page/shared/page-not-found/page-not-found.component';
import {SettingComponent} from '../page/setting/setting.component';
import {DashboardComponent} from '../page/dashboard/dashboard.component';
import {GuardComponent} from '../authentication/guard/guard.component';
import {AboutComponent} from '../page/about/about.component';
import {LogoutComponent} from '../authentication/logout/logout.component';
import {HomeComponent} from '../page/home/home.component';
import {AreaComponent} from '../page/area/area.component';
import {AreaDetailsComponent} from '../page/area-details/area-details.component';
import {AreaFullComponent} from '../page/area-full/area-full.component';
import {BaseComponent} from '../page/base/base.component';

const routes: Routes = [
  // Auth paths
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  // Dashboard route
  {
    path: 'dashboard', canActivate: [GuardComponent], component: BaseComponent, children: [ // base da dove fare il routing
      // main route, it will bring the user directly to the home
      {path: '', component: DashboardComponent},
      // Option Route
      {path: 'setting', component: SettingComponent},
      // about route
      {path: 'about', component: AboutComponent},
      // area route
      {
        path: 'area/:id', component: AreaComponent, children: [
          // default
          {path: '', component: AreaFullComponent},
          // details for area
          {path: 'details/:id', component: AreaDetailsComponent}
        ]
      },
    ]
  },
  // Home route
  {path: 'home', component: HomeComponent},
  // main route, it will bring the user directly to the home
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // ERROR ROUTES
  {path: '**', redirectTo: '/404', pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingService {
}
