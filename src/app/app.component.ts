import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewCocktailsAppComponent } from './components/view-cocktails-app/view-cocktails-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewCocktailsAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Cocktail App';
}
