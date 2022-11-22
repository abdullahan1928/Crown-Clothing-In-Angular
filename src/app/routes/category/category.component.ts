import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SHOPDATA } from 'src/app/database/shop-data';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  searchField = '';

  category = this.route.snapshot.paramMap.get('title');

  products = SHOPDATA.filter((product: { title: any; }) =>
    product.title.toLowerCase() === this.category
  )[0].items;

  productsCopy = structuredClone(this.products);

  ngOnInit(): void {
  }

  onSearch(event: any) {
    this.searchField = event.target.value.toLowerCase();
  }
}

