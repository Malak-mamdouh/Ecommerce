import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { ProductAddComponent } from './admin/products/product-add/product-add.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { CategoryAddComponent } from './admin/categories/category-add/category-add.component';
import { UploadComponent } from './shared/components/upload/upload.component';
// import { DataTablesModule } from 'angular-datatables';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomePageComponent,
    CartComponent,
    ProductListComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
    /*{provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
     }*/
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
