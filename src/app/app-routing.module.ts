import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';

import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { PopularComponent } from './pages/popular/popular.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: DetailsComponent },
  { path: 'genre/:genreId', component: GenrePageComponent },
  { path: 'top-rated', component: TopRatedComponent },
  { path: 'popular', component: PopularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
