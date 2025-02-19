import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from "./product-card/product-card.component";
import { NotesComponent } from "../../components/notes/notes.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, NotesComponent],
  template: `
   <div class="container p-5 d-grid gap-4" style="grid-template-columns: repeat(3, 1fr);">
    @for (product of products(); track product.id) {
        <app-product-card [product]="product"/>
    }
</div>


    <app-notes />
  `,
  styles: ``
})
export class ProductsListComponent {

  async ngOnInit(){
    const res =await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await res.json()
    this.products.set(data)
  }

   products = signal<Product[]>([])

}
