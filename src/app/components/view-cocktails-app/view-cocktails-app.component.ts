import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-view-cocktails-app',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './view-cocktails-app.component.html',
  styleUrl: './view-cocktails-app.component.scss',
})
export class ViewCocktailsAppComponent {
  public title: string = "What's your favorite cocktail";
}
