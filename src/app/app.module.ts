import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/adminPage/product/product.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeLayoutComponent } from './pages/homePage/home/home.component';
import { DetailPageComponent } from './pages/homePage/detail-page/detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './pages/homePage/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashbroadComponent } from './pages/adminPage/dashbroad/dashbroad.component';
import { HeaderAdminComponent } from './component/header-admin/header-admin.component';
import { SideBarComponent } from './component/sidebar/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent,
    DetailPageComponent,
    LoginComponent,
    LayoutComponent,
    LayoutAdminComponent,
    DashbroadComponent,
    HeaderAdminComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
