import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SettingComponent} from './page/setting/setting/setting.component';
import {ListComponent} from './page/list/list/list.component';
import {GraphComponent} from './page/graph/graph/graph.component';
import {NavbarComponent} from './page/shared/navbar/navbar.component';
import {FooterComponent} from './page/shared/footer/footer.component';
import {PageNotFoundComponent} from './page/shared/page-not-found/page-not-found.component';
import {SidebarComponent} from './page/shared/sidebar/sidebar.component';
import {LoginComponent} from './authentication/login/login.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {GuardComponent} from './authentication/guard/guard.component';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from '@angular/forms';
import {AppRoutingService} from './services/app-routing.service';
import {SocketIoConfig, SocketIoModule} from 'ng-socket-io';
import {SummaryCardComponent} from './page/summary-card/summary-card.component';
import {CardComponent} from './page/card/card.component';
import {ArchiveService} from './services/archive.service';
import {AuthenticationService} from './authentication/authentication.service';
import {ProfileService} from './authentication/profile.service';
import {RetriveChartService} from './services/retrive-chart.service';
import {AboutComponent} from './page/about/about.component';

const config: SocketIoConfig = {url: 'http://192.168.1.160:8081/try', options: {}};
// export const authenticationApiUrl = 'http://192.168.1.160:3000/api/user';
export const authenticationApiUrl = 'http://localhost:3000/api/user';

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
    DashboardComponent,
    SummaryCardComponent,
    CardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    AppRoutingService,
    ChartsModule,
    FormsModule
  ],
  providers: [
    ArchiveService,
    GuardComponent,
    AuthenticationService,
    ProfileService,
    RetriveChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
