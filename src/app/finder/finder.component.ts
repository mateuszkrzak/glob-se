import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../shared/services/product.service";

@Component({
  selector: 'app-finder',
  templateUrl: 'finder.component.html',
  styleUrls: ['finder.component.scss'],
  providers: [ProductService]
})
export class FinderComponent implements OnInit {
  shipment: FormGroup;

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
    let params = {};
    for (var prop in this.shipment.value) {
      if (this.shipment.value[prop] || this.shipment.value[prop] !== null)      params[prop] = this.shipment.value[prop];
    }
    this.router.navigate( ['/search'],  { queryParams: params } );

  }

}
