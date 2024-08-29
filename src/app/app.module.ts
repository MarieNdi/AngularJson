import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { BrandComponent } from './brand/brand.component';
import { ChartComponent } from './chart/chart.component'; // Import du composant Chart
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UserComponent,
    CategoryComponent,
    BrandComponent,
    ChartComponent // Déclaration du composant Chart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
