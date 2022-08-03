import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    CarouselModule,
    AuthModule
  ],
  providers: [
    /*{provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
     }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
