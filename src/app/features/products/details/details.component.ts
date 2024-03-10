import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, Signal, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProductsService } from '@api/products.service';
import { Product } from '@shared/models/product.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
})
export default class DetailsComponent{
  starsArray: number[] = new Array(5).fill(0);

  // @Input({ alias: 'id' }) productId!: number;
  productId = input<number>(0, { alias: 'id' });
  product!: Signal<Product | undefined>;

  onAddToCart() {
  }
}