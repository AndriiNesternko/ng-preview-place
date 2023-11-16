import { Component, OnInit } from '@angular/core';
import { BannerResult } from '../../interfaces/baner';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';
import { FilmResult } from 'src/app/interfaces/film';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imgPath = 'https://image.tmdb.org/t/p/original/';

  bannerList: BannerResult[] = [];

  nowPlayingPosters: FilmResult[] = [];
  upcomingPosters: FilmResult[] = [];

  constructor(private service: MovieApiServiceService) {}

  ngOnInit() {
    this.getBannerData();
    this.getNowPlayingData();
    this.getUpcomingData();
  }

  private getBannerData() {
    this.service.getBannerApiData().subscribe({
      next: (res) => {
        this.bannerList = res.results;
      },
      error: (err) => console.log(err),
    });
  }

  private getNowPlayingData() {
    this.service.getNowPlayingApiData().subscribe({
      next: (res) => {
        this.nowPlayingPosters = res.results;
      },
      error: (err) => console.log(err),
    });
  }

  private getUpcomingData() {
    this.service.getUpcomingApiData().subscribe({
      next: (res) => {
        this.upcomingPosters = res.results;
      },
      error: (err) => console.log(err),
    });
  }
}
