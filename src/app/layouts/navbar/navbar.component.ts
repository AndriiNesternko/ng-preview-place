import { Component, OnInit } from '@angular/core';
import { genres } from 'src/app/genres';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  genres = [...genres];
  constructor() {}

  ngOnInit() {}
}
