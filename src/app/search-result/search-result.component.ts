import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { ProductService } from "../shared/services/product.service";
import { ProductCategories } from '../shared/models/productCategories';
import { Product } from '../shared/models/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['search-result.component.scss'],
  providers: [ProductService]
})
export class SearchResultComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  params = {};
  // productCategories: Observable<Array<Product>>;
  productCategories;

  constructor(private route: ActivatedRoute, private productService:ProductService  ) {}

  ngOnInit() {
    let searchParams: URLSearchParams = new URLSearchParams();

    this.sub = this.route.queryParams.subscribe((params: Params) => {
      this.params = params;
      for (var prop in this.params) {
        searchParams.set(prop, this.params[prop]);
      }
    });

    this.productService.getProducts(searchParams)
      .subscribe(
        productCategories => {
          this.productCategories = productCategories;
          console.log(productCategories)
        }
      );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

