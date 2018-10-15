import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SettingComponent} from './page/setting/setting/setting.component';
import {ListComponent} from './page/list/list/list.component';
import {BarChartComponent} from './page/graph/bar-chart/bar-chart.component';
import {NavbarComponent} from './page/shared/navbar/navbar.component';
import {FooterComponent} from './page/shared/footer/footer.component';
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
import {CardComponent} from './page/card/card.component';
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
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {DlDateTimePickerDateModule} from 'angular-bootstrap-datetimepicker';


// export const authenticationApiUrl = 'http://192.168.1.160:3000/api/user';
export const authenticationApiUrl = 'http://localhost:8081/api/auth/login';
export const userApiUrl = 'http://localhost:8081/api/auth/user';
const SocketIOConf: SocketIoConfig = {url: 'http://localhost:8081'};

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    ListComponent,
    BarChartComponent,
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
    HomeComponent,
    AreaComponent,
    ProgressMaskComponent,
    ModalLogoutComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(SocketIOConf),
    HttpClientModule,
    AppRoutingService,
    Ng2GoogleChartsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    DlDateTimePickerDateModule
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
