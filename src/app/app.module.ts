import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';
import { MultipleCarouselComponent } from './layouts/multiple-carousel/multiple-carousel.component';

import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { PopularComponent } from './pages/popular/popular.component';
import { MovieCastComponent } from './pages/details/movie-cast/movie-cast.component';
import { MovieDetailComponent } from './pages/details/movie-detail/movie-detail.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { MoviesPageComponent } from './layouts/movies-page/movies-page.component';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    MultipleCarouselComponent,
    TopRatedComponent,
    PopularComponent,
    MovieCastComponent,
    MovieDetailComponent,
    GenrePageComponent,
    MoviesPageComponent,
    SafePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
