import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBanner } from '../interfaces/baner';
import { Observable } from 'rxjs';
import { FilmResult, IFilm } from '../interfaces/film';
import { Cast, FilmDetail } from '../interfaces/film-detail';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  baseurl = 'https://api.themoviedb.org/3';
  apikey = '4cd63325809f64c9f22f5cc86d812cf8';
  //https://api.themoviedb.org/3/movie/${data}/videos?api_key=4cd63325809f64c9f22f5cc86d812cf8
  constructor(private http: HttpClient) {}

  //banner
  getBannerApiData(): Observable<IBanner> {
    return this.http.get<IBanner>(
      `${this.baseurl}/trending/movie/week?api_key=${this.apikey}`
    );
  }

  //top-rated
  getTopRatedApiData(): Observable<IFilm> {
    return this.http.get<IFilm>(
      `${this.baseurl}/movie/top_rated?api_key=${this.apikey}`
    );
  }

  //popular
  getPopularApiData(): Observable<IFilm> {
    return this.http.get<IFilm>(
      `${this.baseurl}/movie/popular?api_key=${this.apikey}`
    );
  }

  //upcoming
  getUpcomingApiData(): Observable<IFilm> {
    return this.http.get<IFilm>(
      `${this.baseurl}/movie/upcoming?api_key=${this.apikey}`
    );
  }

  //now playing
  getNowPlayingApiData(): Observable<IFilm> {
    return this.http.get<IFilm>(
      `${this.baseurl}/movie/now_playing?api_key=${this.apikey}`
    );
  }

  //Genres
  fetchMovies(genreId: number): Observable<IFilm> {
    return this.http.get<IFilm>(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=${genreId}`
    );
  }
  //&page=${pageNumber} at the end

  //details
  getMovieDetails(movieId: number): Observable<FilmDetail> {
    return this.http.get<FilmDetail>(
      `${this.baseurl}/movie/${movieId}?api_key=${this.apikey}`
    );
  }

  // getMovieVideo
  getMovieVideo(movieId: number): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${movieId}/videos?api_key=${this.apikey}`
    );
  }

  // getMovieCast
  getMovieCast(movieId: number): Observable<Cast> {
    return this.http.get<Cast>(
      `${this.baseurl}/movie/${movieId}/credits?api_key=${this.apikey}`
    );
  }

  //searchMovie
  searchMovie(movieName: string): Observable<IFilm> {
    return this.http.get<IFilm>(
      `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${movieName}`
    );
  }
}
