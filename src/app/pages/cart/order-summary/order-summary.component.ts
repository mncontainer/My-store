import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from "../../../components/button/button.component";


@Component({
  selector: 'app-order-summary',
  imports: [ButtonComponent],
  template: `
    <div class="bg-secondary-subtle rounded-4 shadow-lg  m-auto">
      <h3 class="ms-4">Order summary</h3>
      <div class="d-flex flex-column mb-4">
        <div class="d-flex mb-4 flex-row align-items-center mt-2">
        <span class="fs-4 ms-5">Total:</span>
        <span class="ms-3 fw-bold fs-3">{{ '$' + total()}}</span>
      </div>
      <app-button label="Proceed to checkout" class="btn-success w-100 fs-4"/>
      </div>
    </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {
    cartService = inject(CartService)

    total = computed(() => {
      let total = 0;
      for(const item of this.cartService.cart()) {
        total += item.price
    }
    return Math.round(total)
})

}
