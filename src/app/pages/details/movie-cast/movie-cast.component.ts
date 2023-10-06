import { Component, Input, OnInit } from '@angular/core';
import { CastResult } from 'src/app/interfaces/film-detail';

@Component({
  selector: 'movie-cast',
  templateUrl: './movie-cast.component.html',
})
export class MovieCastComponent {
  @Input() movieCast?: CastResult[];
  constructor() {}
}
