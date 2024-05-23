import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionHomeComponent } from './collections/collection-home/collection-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ElementsHomeComponent,CollectionHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'compos';
}
