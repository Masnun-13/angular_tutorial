import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_CONFIG_SERVICE } from './AppConfig/appconfig.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';

function initFactory(initService : InitService){
  return() => initService.init()
}

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
