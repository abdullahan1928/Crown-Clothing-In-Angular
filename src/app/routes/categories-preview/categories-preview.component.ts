import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/database/categories-types';
import { SHOPDATA } from 'src/app/database/shop-data';

@Component({
  selector: 'categories-preview',
  templateUrl: './categories-preview.component.html',
  styleUrls: ['./categories-preview.component.scss']
})
export class CategoriesPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = SHOPDATA;

}
