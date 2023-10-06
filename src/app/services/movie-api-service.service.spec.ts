/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieApiServiceService } from './movie-api-service.service';

describe('Service: MovieApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieApiServiceService]
    });
  });

  it('should ...', inject([MovieApiServiceService], (service: MovieApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
