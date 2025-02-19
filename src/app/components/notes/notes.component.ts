import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  imports: [],
  template: `
    <div class="container shadow w-100 bg-warning-subtle">
      <h3>Notes:</h3>
      <ol>
        <li>This website features dynamic styling based on stock but the API being used 'Fake store-API' does not have stock numbers.</li>
      </ol>

    </div>
  `,
  styles: ``
})
export class NotesComponent {

}
