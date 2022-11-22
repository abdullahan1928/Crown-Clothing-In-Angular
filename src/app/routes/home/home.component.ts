import { Component } from '@angular/core';
import { CATEGORIES } from "../../database/categories-types";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  categories = CATEGORIES;
}
