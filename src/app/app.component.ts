import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineComponent } from './inline/inline.component';
import { NewCompComponent } from './new-comp/new-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InlineComponent,NewCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment6';
}
