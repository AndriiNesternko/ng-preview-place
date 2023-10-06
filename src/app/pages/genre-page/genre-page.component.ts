import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genres } from 'src/app/genres';
import { FilmResult } from 'src/app/interfaces/film';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss'],
})
export class GenrePageComponent implements OnInit {
  genreId!: number;
  title: string = '';
  moviesResult!: FilmResult[];

  constructor(
    private route: ActivatedRoute,
    private service: MovieApiServiceService
  ) {}

  ngOnInit() {
    // is this okay what i do here??????
    this.route.params.subscribe((param) => {
      this.genreId = +param['genreId'];
      this.getMovies();
      this.title = [...genres].filter(
        (el) => el['id'] === this.genreId
      )[0].name;
    });
  }

  getMovies() {
    this.service.fetchMovies(this.genreId).subscribe((res) => {
      this.moviesResult = res.results;
    });
  }
}
