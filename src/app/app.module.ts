import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SettingComponent} from './dashboard/setting/setting/setting.component';
import {ListComponent} from './dashboard/list/list/list.component';
import {GraphComponent} from './dashboard/graph/graph/graph.component';
import {NavbarComponent} from './dashboard/common/navbar/navbar.component';
import {FooterComponent} from './dashboard/common/footer/footer.component';
import {PageNotFoundComponent} from './dashboard/common/page-not-found/page-not-found.component';
import {SidebarComponent} from './dashboard/common/sidebar/sidebar.component';
import {LoginComponent} from './authentication/login/login.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {GuardComponent} from './authentication/guard/guard.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from '@angular/forms';
import {AppRoutingService} from './services/app-routing.service';
import {SocketIoConfig, SocketIoModule} from 'ng-socket-io';

const config: SocketIoConfig = {url: 'http://192.168.1.160:8081/try', options: {}};
export const auth = 'http://192.168.1.160:300/api/user';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    ListComponent,
    GraphComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SidebarComponent,
    LoginComponent,
    LogoutComponent,
    GuardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    AppRoutingService,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
