import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";


@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-4 d-flex flex-column mb-3">
      <h2>Shopping cart</h2>
      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item" />
      
      }
    </div>
      <app-order-summary/>
  `,
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService)
}
