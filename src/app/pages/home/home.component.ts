import { Component, OnInit } from '@angular/core';
import { BannerResult } from '../../interfaces/baner';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imgPath = 'https://image.tmdb.org/t/p/original/';

  bannerList: BannerResult[] = [];
  constructor(private service: MovieApiServiceService) {}

  ngOnInit() {
    this.getBannerData();
  }

  getBannerData() {
    this.service.getBannerApiData().subscribe({
      next: (res) => {
        this.bannerList = res.results;
      },
      error: (err) => console.log(err),
      complete: () => console.info('BannerDataAPI complete'),
    });
  }
}
