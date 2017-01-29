import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../shared/services/product.service";
import { CountryService } from "../shared/services/country.service";
import { URLSearchParams } from '@angular/http';
import { Location } from '@angular/common'

@Component({
  selector: 'app-valuator',
  templateUrl: 'valuator.component.html',
  styleUrls: ['valuator.component.scss'],
  providers: [ProductService]
})
export class ValuatorComponent implements OnInit {
  private shipment: FormGroup;
  private isDataFetched:boolean = false;
  private isFastShipment:boolean = false;

  private validationErrors;
  private errorMsg;
  public productCategories;
  public countries;
  private sub: Subscription;

  constructor(private formBuilder:FormBuilder,
              private productService:ProductService,
              private countryService:CountryService,
              private router:Router,
              private route: ActivatedRoute,
              private location:Location) { }

  ngOnInit() {
    this.errorMsg={
      required: 'Pole wymagane',
      postCode: 'Kod pocztowy w nieodpowiednim formacie'
    }

    this.validationErrors={
        width: this.errorMsg.required,
        height: this.errorMsg.required,
        length: this.errorMsg.required,
        weight: this.errorMsg.required,
        quantity: this.errorMsg.required,
        receiverCountryId: this.errorMsg.required,
        senderCountryId: this.errorMsg.required,
        senderPostCode: this.errorMsg.postCode,
        receiverPostCode: this.errorMsg.postCode
      };

    this.shipment = this.formBuilder.group({
      basic: this.formBuilder.group({
        width: ['', Validators.required],
        height: ['', Validators.required],
        length: ['', Validators.required],
        weight: ['', Validators.required],
        quantity: ['', Validators.required],
        receiverCountryId: ['', Validators.required],
        senderCountryId: ['', Validators.required]
      }),
      isFastShipment: '',
      extra: this.formBuilder.group({
        senderPostCode: ['', Validators.pattern('[0-9]{2}\-[0-9]{3}')],
        receiverPostCode: ['', Validators.pattern('[0-9]{2}\-[0-9]{3}')]
      })
    });

    this.sub = this.route.queryParams.subscribe((params: Params) => {
      if('height' && 'width' && 'length' && 'weight' && 'quantity' && 'receiverCountryId' && 'senderCountryId' in params){
        this.fetchProducts(params);
        this.isDataFetched = true;
      }
    });
    this.fetchCountries();
  }

  onSubmit() {
    let shipment;
    if(this.shipment.value.isFastShipment){
      shipment = Object.assign(this.shipment.value.basic,this.shipment.value.extra)
    }
    else {
      shipment = this.shipment.value.basic;
    }
    console.log(shipment);

    let query = this.mapToQuery(this.getUrlSearchParams(shipment).paramsMap);
    this.location.go("valuator", query);

    this.fetchProducts(shipment);

    //this.router.navigate( ['/valuator'],  { queryParams: this.shipment.value } );
  }

  mapToQuery(map):string{
    let query:string='';
    map.forEach((value, key, i, ) => {
      query += key + "=" + value[0] + "&";
    });

    return query.substring(0, query.length-1);
  }

  fetchProducts(params):void  {
    this.productService.getProducts(this.getUrlSearchParams(params))
      .subscribe(
        productCategories => {
          console.log(productCategories);
          this.productCategories = productCategories;
          this.isDataFetched = true;
        },
        error => {
          this.validationErrors = JSON.parse(error).fields;
          console.log(this.validationErrors);
          this.isDataFetched = false;
        }
      );
  }

  fetchCountries():void  {
    this.countryService.getCountries()
      .subscribe(
        countries => {
          this.countries = countries;
          let polska = this.countries.find(el => el.name === "Polska");

          this.countries.splice(this.countries.indexOf(polska), 1);
          this.countries.unshift(polska);
        },
        error => {
          console.log(error);
        }
      );
  }

  getUrlSearchParams(params):URLSearchParams{
    let searchParams: URLSearchParams = new URLSearchParams();
    for (var prop in params) {
      searchParams.set(prop, params[prop]);
    }

    return searchParams;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
