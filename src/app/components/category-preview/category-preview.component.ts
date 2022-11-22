import { Component, OnInit, Input } from '@angular/core';
import { SHOPDATA } from 'src/app/database/shop-data';

@Component({
  selector: 'category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  category: any;
}
