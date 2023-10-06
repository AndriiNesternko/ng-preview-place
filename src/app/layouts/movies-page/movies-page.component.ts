import { Component, Input, SimpleChanges } from '@angular/core';
import { FilmResult } from 'src/app/interfaces/film';

@Component({
  selector: 'movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent {
  @Input() movies!: FilmResult[];
}
