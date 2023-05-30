import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_CONFIG_SERVICE } from './AppConfig/appconfig.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';

import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator.directive'
import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';

function initFactory(initService : InitService){
  return() => initService.init()
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,

    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    RoomsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HeaderModule,
  ],
  providers: [{
    provide: APP_CONFIG_SERVICE,
    useValue: APP_CONFIG
  },
{
  useClass: RequestInterceptor,
  provide: HTTP_INTERCEPTORS,
  multi: true
},
{
  provide: APP_INITIALIZER,
  useFactory: initFactory,
  deps : [InitService],
  multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
