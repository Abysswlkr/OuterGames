import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { GamesListComponent } from './games-list/games-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomepageComponent,
    NavbarComponent,
    CreateProductComponent,
    ProductsListComponent,
    GamesListComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ShopCartComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }

//Create dashboard 
//ng g m components/dashboard
//ng g c components/dashboard
