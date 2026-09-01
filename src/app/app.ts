import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCatalogue } from './components/productcatalogue/productcatalogue';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductCatalogue],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-practicefinal2');
}
