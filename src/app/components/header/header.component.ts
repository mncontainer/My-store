import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
      <div class="d-flex justify-content-between pt-2 pb-2 pe-5 ps-5 bg-primary-subtle shadow align-items-center">
        <a class="fs-2 fw-bold text-black" href="/" style="text-decoration: none;" >My store</a>
        <span>
        <app-primary-button [label]= "'Cart (' + cartService.cart().length + ')' " class="ps-4 pe-4 fs-5 rounded-pill" (btnClicked)="showButtonClicked()" routerLink="/cart" />

        </span>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

  showButtonClicked(){
    console.log("clicked")
  }

  cartService = inject(CartService)

}
