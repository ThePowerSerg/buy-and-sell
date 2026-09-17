import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingsPage } from './listings-page/listings-page';

@Component({
  imports: [RouterOutlet, ListingsPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('buy-and-sell');
}
