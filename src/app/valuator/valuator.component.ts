import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../shared/services/product.service";
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-valuator',
  templateUrl: 'valuator.component.html',
  styleUrls: ['valuator.component.scss'],
  providers: [ProductService]
})
export class ValuatorComponent implements OnInit {
  shipment: FormGroup;
  productCategories;
  constructor(private formBuilder:FormBuilder, private productService:ProductService, private router:Router) { }

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

    //
    let params = {};
    for (var prop in this.shipment.value) {
      if (this.shipment.value[prop] || this.shipment.value[prop] !== null)      params[prop] = this.shipment.value[prop];
    }
    //

    let searchParams: URLSearchParams = new URLSearchParams();


      for (var prop in params) {
        searchParams.set(prop, params[prop]);
      }
    this.productService.getProducts(searchParams)
      .subscribe(
        productCategories => {
          console.log(productCategories);
          this.productCategories = productCategories;
        },
        error => {
          console.log("blad: " + error)
        }
      );

    this.router.navigate( ['/home'],  { queryParams: params } );

  }

}
