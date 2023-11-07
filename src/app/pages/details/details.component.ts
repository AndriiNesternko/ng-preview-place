import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastResult, FilmDetail } from 'src/app/interfaces/film-detail';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  movieId!: number;
  movieDetails!: FilmDetail;
  videoUrl: string = '';
  movieCast!: CastResult[];

  constructor(
    private service: MovieApiServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.movieId = param['id'];
    });

    this.getMovieDetails();
    this.getMovieVideo();
    this.getMovieCast();
  }

  private getMovieDetails() {
    this.service.getMovieDetails(this.movieId).subscribe((res) => {
      this.movieDetails = res;
    });
  }

  private getMovieVideo() {
    this.service.getMovieVideo(this.movieId).subscribe((res) => {
      if (res.results.length > 0) {
        this.videoUrl =
          'https://www.themoviedb.org/video/play?key=' + res.results[0].key;
      }
    });
  }

  private getMovieCast() {
    this.service.getMovieCast(this.movieId).subscribe((res) => {
      this.movieCast = res.cast;
    });
  }
}
