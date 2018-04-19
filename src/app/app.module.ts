import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';


import { ServiceWorkerModule } from '@angular/service-worker';
// 共享模块
import { SharedModule } from '@shared/shared.module';
import { FireBaseComponentsModule } from '@shared/firebase.module';
// 核心模块 全局引入
import { CoreModule } from '@core/core.module';
// 环境变量
import { environment } from '@env/environment';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
    FireBaseComponentsModule,
    ReactiveFormsModule,
    environment['ngsw'] ? ServiceWorkerModule.register('./ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
