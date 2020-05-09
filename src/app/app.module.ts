import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ProductgridComponent } from './components/productgrid/productgrid.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FiltersComponent } from './components/shoppingcart/filters/filters.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { ProductListComponent } from './components/shoppingcart/product-list/product-list.component';
import { CartItemComponent } from './components/shoppingcart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shoppingcart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductgridComponent,
    FooterComponent,
    ShoppingcartComponent,
    NavComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
