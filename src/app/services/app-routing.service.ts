import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../authentication/login/login.component';
import {ListComponent} from '../page/list/list/list.component';
import {PageNotFoundComponent} from '../page/shared/page-not-found/page-not-found.component';
import {SettingComponent} from '../page/setting/setting/setting.component';
import {DashboardComponent} from '../page/dashboard/dashboard.component';

const routes: Routes = [
  // main route, it will bring the user directly to the home
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // Login paths
  {path: 'login', component: LoginComponent},
  // Dashboard route
  {path: 'dashboard', component: DashboardComponent},
  // List Route
  {path: 'list', component: ListComponent},
  // Option Route
  {path: 'settings', component: SettingComponent},
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
