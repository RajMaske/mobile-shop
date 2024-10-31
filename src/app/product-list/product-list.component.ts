import { Component, OnInit } from '@angular/core';
import productsData from '../../assets/products.json';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  hide:boolean=true
 
    products = productsData;
    
  selectedProduct: any; // Holds the selected product

  // Method to select a product
  selectProduct(product: any) {
    this.selectedProduct = product;
    this.hide=false
  }

  // Load your products from the JSON file here
  ngOnInit() {
    this.loadProducts();
  }
  deselectProduct() {
    this.selectedProduct = null; // Reset to hide the detail view
    this.hide=true
  }
  loadProducts() {
    // Implement your logic to load products, e.g., from an assets JSON file
  }
}
