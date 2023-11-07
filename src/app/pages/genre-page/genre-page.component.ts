import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmResult } from 'src/app/interfaces/film';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
})
export class GenrePageComponent implements OnInit {
  genreId: number | undefined;
  isError: boolean = true;
  title: string = '';
  moviesResult: FilmResult[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: MovieApiServiceService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((qParam) => {
      this.title = qParam['genre'];
    });

    this.route.params.subscribe((param) => {
      this.genreId = +param['genreId'];
      this.getMovies();
    });
  }

  private getMovies() {
    if (this.genreId === undefined) {
      this.isError = true;
      return;
    }
    this.service.fetchMovies(this.genreId).subscribe({
      next: (res) => {
        this.moviesResult = res.results;
        this.isError = false;
      },
      error: (err) => {
        console.log(err);
        this.isError = true;
      },
    });
  }
}
