import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '@api/products.service';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe, CardComponent],
  template: `
   <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
        @for (product of products(); track $index) {
          <app-card
            class="w-full p-4 lg:w-1/4 md:w-1/2"
            [product]="product"
          />
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {
  private readonly productSvc = inject(ProductsService);
  products = this.productSvc.products;
}
