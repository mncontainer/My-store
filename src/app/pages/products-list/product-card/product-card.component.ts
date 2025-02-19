import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow rounded-5 p-4 d-flex flex-column justify-content-center position-relative">
  <div class="d-flex justify-content-center align-items-center mb-3" style="width: 100%; height: auto;">
    <img [src]="product().image" class="img-fluid" style="max-width: 100%; max-height: 200px; object-fit: contain;">
  </div>
  <div class="text-start d-flex justify-content-between">
    <h5 class="fw-bold">{{ product().title }}</h5>
    <p>{{ "$ " + product().price }}</p>
    
  </div>
  <app-primary-button label="Add to cart" class="w-100 fs-5" (btnClicked)="cartService.addToCart(product())" />

  <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill fw-bold"
      [class]= "product().stock ? 'text-bg-success' : 'text-bg-danger'">
  @if (product().stock) {
    {{ product().stock }} left
  } @else {
    Out of stock!
  }
</span>
</div>



  `,
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>()



  cartService = inject(CartService);
}
