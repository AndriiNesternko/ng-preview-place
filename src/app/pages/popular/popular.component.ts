import { Component, OnInit } from '@angular/core';
import { FilmResult } from 'src/app/interfaces/film';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  title = 'Popular';
  moviesResult!: FilmResult[];

  constructor(private service: MovieApiServiceService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.service.getPopularApiData().subscribe((res) => {
      this.moviesResult = res.results;
    });
  }
}
