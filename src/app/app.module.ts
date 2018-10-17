import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SettingComponent} from './page/setting/setting.component';
import {BarChartComponent} from './page/graph/bar-chart/bar-chart.component';
import {NavbarComponent} from './page/shared/navbar/navbar.component';
import {PageNotFoundComponent} from './page/shared/page-not-found/page-not-found.component';
import {SidebarComponent} from './page/shared/sidebar/sidebar.component';
import {LoginComponent} from './authentication/login/login.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {GuardComponent} from './authentication/guard/guard.component';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {FormsModule} from '@angular/forms';
import {AppRoutingService} from './services/app-routing.service';
import {SocketIoConfig, SocketIoModule} from 'ng-socket-io';
import {SummaryCardComponent} from './page/summary-card/summary-card.component';
import {ArchiveService} from './services/archive.service';
import {AuthenticationService} from './authentication/authentication.service';
import {ProfileService} from './authentication/profile.service';
import {RetriveChartService} from './services/retrive-chart.service';
import {AboutComponent} from './page/about/about.component';
import {HomeComponent} from './page/home/home.component';
import {AreaComponent} from './page/area/area.component';
import {ProgressMaskComponent} from './page/shared/progress-mask/progress-mask.component';
import {ModalLogoutComponent} from './page/shared/modal-logout/modal-logout.component';
import {PieChartComponent} from './page/graph/pie-chart/pie-chart.component';
import {GaugeChartComponent} from './page/graph/gauge-chart/gauge-chart.component';
import {RetriveDataService} from './services/retrive-data.service';
import {AreaDetailsComponent} from './page/area-details/area-details.component';
import {AreaFullComponent} from './page/area-full/area-full.component';
import {BaseComponent} from './page/base/base.component';

const api = {host: 'localhost', port: '8081'};
// const api = {host: 'localhost', port: '8081'};
export const authenticationApiUrl = 'http://' + api.host + ':' + api.port + '/api/auth/login';
export const userApiUrl = 'http://' + api.host + ':' + api.port + '/api/auth/user';
export const factoryStructApiUrl = 'http://' + api.host + ':' + api.port + '/api/factory';
const SocketIOConf: SocketIoConfig = {url: 'http://' + api.host + ':' + api.port + ''};


@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    BarChartComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidebarComponent,
    LoginComponent,
    LogoutComponent,
    GuardComponent,
    DashboardComponent,
    SummaryCardComponent,
    AboutComponent,
    HomeComponent,
    AreaComponent,
    ProgressMaskComponent,
    ModalLogoutComponent,
    PieChartComponent,
    GaugeChartComponent,
    AreaDetailsComponent,
    AreaFullComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(SocketIOConf),
    HttpClientModule,
    AppRoutingService,
    Ng2GoogleChartsModule,
    FormsModule,
  ],
  providers: [
    ArchiveService,
    GuardComponent,
    AuthenticationService,
    ProfileService,
    RetriveChartService,
    RetriveDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
