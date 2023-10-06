import { Component, OnInit } from '@angular/core';
import { FilmResult } from 'src/app/interfaces/film';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'multiple-carousel',
  templateUrl: './multiple-carousel.component.html',
  styleUrls: ['./multiple-carousel.component.css'],
})
export class MultipleCarouselComponent implements OnInit {
  list: FilmResult[] = [];
  constructor(private service: MovieApiServiceService) {}

  ngOnInit() {
    this.getUpcomingData();
  }

  getUpcomingData() {
    this.service.getUpcomingApiData().subscribe({
      next: (res) => {
        this.list = res.results;
        console.log(this.list);
      },
      error: (err) => console.log(err),
      complete: () => console.info('UpcomingMovieDataAPI complete'),
    });
  }
}
