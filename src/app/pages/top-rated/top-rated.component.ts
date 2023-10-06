import { Component, OnInit } from '@angular/core';
import { FilmResult } from 'src/app/interfaces/film';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent implements OnInit {
  title = 'Top-rated';
  moviesResult!: FilmResult[];

  constructor(private service: MovieApiServiceService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.service.getTopRatedApiData().subscribe((res) => {
      this.moviesResult = res.results;
    });
  }
}
