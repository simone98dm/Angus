import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../authentication/login/login.component';
import {ListComponent} from '../dashboard/list/list/list.component';
import {PageNotFoundComponent} from '../dashboard/common/page-not-found/page-not-found.component';
import {GuardComponent} from '../authentication/guard/guard.component';
import {SettingComponent} from '../dashboard/setting/setting/setting.component';
import {DashboardComponent} from '../dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', canActivate: [GuardComponent], redirectTo: '/dashboard', pathMatch: 'full'},
  // Login paths
  {path: 'login', component: LoginComponent},
  // Dashboard route
  {path: 'dashboard', canActivate: [GuardComponent], component: DashboardComponent},
  // List Route
  {path: 'list', canActivate: [GuardComponent], component: ListComponent},
  // Option Route
  {path: 'settings', canActivate: [GuardComponent], component: SettingComponent},
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
