import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBanner } from '../interfaces/baner';
import { Observable, tap } from 'rxjs';
import { IFilm } from '../interfaces/film';
import { Cast, FilmDetail } from '../interfaces/film-detail';
import { environment } from 'src/environments/environment.development';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  baseurl = 'https://api.themoviedb.org/3';
  apikey = environment.apiKey;

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  private cacheData(key: string, data: any): void {
    this.cacheService.set(key, data);
  }

  private getCachedData(key: string): any {
    return this.cacheService.get(key);
  }

  private fetchDataAndCache<T>(key: string, url: string): Observable<T> {
    const cacheKey = key;
    const cachedData = this.getCachedData(cacheKey);

    if (cachedData) {
      return new Observable<T>((observer) => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      return this.http.get<T>(url).pipe(
        tap((res: T) => {
          this.cacheData(cacheKey, res);
        })
      );
    }
  }

  //banner

  getBannerApiData(): Observable<IBanner> {
    const bannerUrl = `${this.baseurl}/trending/movie/week?api_key=${this.apikey}`;
    return this.fetchDataAndCache<IBanner>('banner', bannerUrl);
  }

  //top-rated

  getTopRatedApiData(): Observable<IFilm> {
    const topRatedUrl = `${this.baseurl}/movie/top_rated?api_key=${this.apikey}`;
    return this.fetchDataAndCache<IFilm>('top-rated', topRatedUrl);
  }

  //popular
  getPopularApiData(): Observable<IFilm> {
    const topRatedUrl = `${this.baseurl}/movie/popular?api_key=${this.apikey}`;
    return this.fetchDataAndCache<IFilm>('popular', topRatedUrl);
  }

  //upcoming
  getUpcomingApiData(): Observable<IFilm> {
    const topRatedUrl = `${this.baseurl}/movie/upcoming?api_key=${this.apikey}&page=2`;
    return this.fetchDataAndCache<IFilm>('upcoming', topRatedUrl);
  }

  //now playing
  getNowPlayingApiData(): Observable<IFilm> {
    const topRatedUrl = `${this.baseurl}/movie/now_playing?api_key=${this.apikey}`;
    return this.fetchDataAndCache<IFilm>('now-playing', topRatedUrl);
  }

  //Genres
  fetchMovies(genreId: number): Observable<IFilm> {
    const topRatedUrl = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=${genreId}`; //&page=${pageNumber} if needed
    const key = String(genreId);
    return this.fetchDataAndCache<IFilm>(key, topRatedUrl);
  }

  // fetchMovies(genreId: number): Observable<IFilm> {
  //   return this.http.get<IFilm>(
  //     `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=${genreId}`
  //   );
  // }

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
