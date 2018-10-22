import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page/shared/page-not-found/page-not-found.component';
import {HomeComponent} from '../page/home/home.component';

const routes: Routes = [
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
