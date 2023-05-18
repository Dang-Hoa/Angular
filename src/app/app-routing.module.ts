import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './pages/homePage/home/home.component';
import { HomeComponent } from './pages/adminPage/product/product.component';
import { LoginComponent } from './pages/homePage/login/login.component';
import { DetailPageComponent } from './pages/homePage/detail-page/detail-page.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashbroadComponent } from './pages/adminPage/dashbroad/dashbroad.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: "", component: HomeLayoutComponent },
      { path: "detail/:id", component: DetailPageComponent },
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent, children: [
      { path: "", component: DashbroadComponent },
      { path: "dashbroad", component: DashbroadComponent },
      { path: "products", component: HomeComponent },

    ]
  },
  { path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
