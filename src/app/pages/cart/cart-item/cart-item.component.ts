import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="bg-white shadow rounded-4 p-4 d-flex mb-3 align-items-center justify-content-between">
      <div class="d-flex flex-row">
      <img [src]="item().image" style="width: 50px; height: 50px;" class="me-4">
      <div class="d-flex flex-column">
        <span class="fs-3 fw-bold">{{ item().title }}</span>
        <span class="fs-5">{{ '$ ' + item().price }}</span>
      </div>
    </div>
      <div>
        <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)" class="btn-danger"/>
      </div>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>()

  cartService = inject(CartService)
}
