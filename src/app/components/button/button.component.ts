import { Component, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="btn {{ class() }}" (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('')

  class = input('')

  btnClicked = output()
}
