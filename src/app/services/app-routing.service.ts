import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../authentication/login/login.component';
import {ListComponent} from '../page/list/list/list.component';
import {PageNotFoundComponent} from '../page/shared/page-not-found/page-not-found.component';
import {SettingComponent} from '../page/setting/setting/setting.component';
import {DashboardComponent} from '../page/dashboard/dashboard.component';
import {GuardComponent} from '../authentication/guard/guard.component';
import {AboutComponent} from '../page/about/about.component';
import {LogoutComponent} from '../authentication/logout/logout.component';
import {HomeComponent} from '../page/home/home.component';
import {AreaComponent} from '../page/area/area.component';

const routes: Routes = [
  // Auth paths
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  // Dashboard route
  {path: 'dashboard', canActivate: [GuardComponent], component: DashboardComponent},
  // List Route
  {path: 'list', canActivate: [GuardComponent], component: ListComponent},
  // Option Route
  {path: 'setting', canActivate: [GuardComponent], component: SettingComponent},
  // Home route
  {path: 'home', component: HomeComponent},
  // about route
  {path: 'about', canActivate: [GuardComponent], component: AboutComponent},
  // area route
  {path: 'area/:id', canActivate: [GuardComponent], component: AreaComponent},
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
