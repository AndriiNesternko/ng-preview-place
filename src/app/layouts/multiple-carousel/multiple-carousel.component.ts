import { Component, Input } from '@angular/core';
import { FilmResult } from 'src/app/interfaces/film';

@Component({
  selector: 'multiple-carousel',
  templateUrl: './multiple-carousel.component.html',
})
export class MultipleCarouselComponent {
  @Input() id!: number;
  @Input() postersList!: FilmResult[][];
}
