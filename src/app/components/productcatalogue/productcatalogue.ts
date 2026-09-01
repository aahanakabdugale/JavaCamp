import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../../model/product';
import { Productservice } from '../../services/productservice';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-productcatalogue',
  styleUrl: './productcatalogue.css',
  templateUrl: './productcatalogue.html',
})
export class ProductCatalogue implements OnInit {

  newProduct:Product={
    price:0,
    name:''
  }

  products=signal<Product[]>([])

  constructor(private productService:Productservice){}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.showProducts().subscribe({
      next:(serviceResponse)=>{
        this.products.set(serviceResponse)
      }
    })
  }

  onSubmit(){
    this.productService.addProduct(this.newProduct).subscribe({
      next:(serviceResponse)=>{
        this.loadProducts();
        this.newProduct={name:'',price:0}
      },
      error:(serviceResponse)=>console.log('could not load product',serviceResponse)
    })
  }

}
