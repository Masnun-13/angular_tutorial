import { environment } from "src/environments/environment";
import { InjectionToken } from '@angular/core'
import { AppConfig } from "./appconfig.interface";

export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('app config')
