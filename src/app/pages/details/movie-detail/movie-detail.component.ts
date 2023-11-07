import { Component, Input } from '@angular/core';
import { FilmDetail } from 'src/app/interfaces/film-detail';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent {
  @Input() movieDetails!: FilmDetail;
  @Input() videoUrl!: string;
}
