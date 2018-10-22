import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GuardComponent} from '../authentication/guard/guard.component';
import {BaseComponent} from '../page/base/base.component';
import {DashboardComponent} from '../page/dashboard/dashboard.component';
import {SettingComponent} from '../page/setting/setting.component';
import {AboutComponent} from '../page/about/about.component';
import {AreaComponent} from '../page/area/area.component';
import {AreaFullComponent} from '../page/area-full/area-full.component';
import {AreaDetailsComponent} from '../page/area-details/area-details.component';

const dashboardRoutes: Routes = [
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
      {path: '**', redirectTo: '../404', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class DashboardRoutingModule {
}
