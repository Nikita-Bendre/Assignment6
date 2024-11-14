import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  standalone: true,
  imports: [],
  template: `

  <h2>Welcome to Inline Component</h2>

    <p>
      inline works!
    </p>
  `,
  styles: [`

  h2{
    color: Red
  }

  p{
    font-size: 30px;
    font-family: cursive;
  }

    `]
})
export class InlineComponent {

}
