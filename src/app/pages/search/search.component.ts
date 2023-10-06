import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmResult, IFilm } from 'src/app/interfaces/film';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  moviename: string = '';
  movieResults: FilmResult[] = [];
  constructor(private service: MovieApiServiceService) {}

  serchMovie() {
    this.service.searchMovie(this.moviename).subscribe((res: IFilm) => {
      this.movieResults = res.results;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.moviename = form.value.moviename;
      this.movieResults = [];
      this.serchMovie();
      form.reset();
    }
  }
}
