import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { GamesListComponent } from './games-list/games-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  //Child Routes (All the routers that we going to use or load inside the dashboard)
  { path: '', component: DashboardComponent, children: [
    {path: '', component: HomepageComponent},
    {path: 'products-list', component: ProductsListComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'games', component: GamesListComponent},
    {path: 'create-product', component: CreateProductComponent},
    {path: 'edit-product/:id', component: CreateProductComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
