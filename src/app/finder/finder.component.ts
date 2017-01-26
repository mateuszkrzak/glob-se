import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../shared/services/product.service";
import { URLSearchParams } from '@angular/http';
import { ProductCategories } from '../shared/models/productCategories'

@Component({
  selector: 'app-finder',
  templateUrl: 'finder.component.html',
  styleUrls: ['finder.component.scss'],
  providers: [ProductService]
})
export class FinderComponent implements OnInit {
  shipment: FormGroup;
  productCategories: ProductCategories[];

  constructor(private formBuilder:FormBuilder, private productService:ProductService ) { }

  ngOnInit() {
    this.shipment = this.formBuilder.group({
      width: ['', Validators.required],
      height: ['', Validators.required],
      length: ['', Validators.required],
      weight: ['', Validators.required],
      quantity: ['', Validators.required],
      receiverCountryId: ['', Validators.required],
      senderCountryId: ['', Validators.required]
      // senderPostCode: ['', Validators.pattern('[0-9]{2}-[0-9]{3}')],
      // receiverPostCode: ['', Validators.pattern('[0-9]{2}-[0-9]{3}')]
    });

  }


  onSubmit() {
    let params: URLSearchParams = new URLSearchParams();

    for (var prop in this.shipment.value) {
      if (this.shipment.value[prop] || this.shipment.value[prop] !== null)      params.set(prop, this.shipment.value[prop]);
    }

    this.productService.getProducts(params)
      .subscribe(
        productCategories => {
          this.productCategories = productCategories;
          console.log(productCategories)
        }
      )
  }


}
