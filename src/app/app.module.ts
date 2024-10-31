// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Optional but good for future API work
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';  // Your product list component
import { HeaderComponent } from './header/header.component';                    // Optional: header component
import { FooterComponent } from './footer/footer.component';                    // Optional: footer component

@NgModule({
  declarations: [
     // Optional: Register the Footer component here
  ],
  imports: [
    AppComponent,
    ProductListComponent,  // Register the Product List component here
    HeaderComponent,       // Optional: Register the Header component here
    FooterComponent    ,
    CommonModule,
    BrowserModule,
    HttpClientModule      // Optional: Adds HTTP client for potential future API calls
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
