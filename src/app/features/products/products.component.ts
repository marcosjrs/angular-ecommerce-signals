import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '@api/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe],
  template: `
   <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          @for (product of products(); track product.id) {
            <pre> {{product | json}} </pre>
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
