import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../authentication/login/login.component';
import {LogoutComponent} from '../authentication/logout/logout.component';

const authRoutes: Routes = [
  {
    path: 'auth', children: [
      {path: '', redirectTo: './login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: '**', redirectTo: '../404', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
