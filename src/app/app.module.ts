import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ValuatorComponent } from './valuator/valuator.component';
import { AboutComponent } from './about/about.component';
import { SearchResultComponent } from './search-result/search-result.component';


import { ProductService } from './shared/services/product.service';
import { CountryService } from './shared/services/country.service';
import { EndpointService } from './shared/services/endpoint.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductCategoriesPipe } from './shared/pipes/productCategories.pipe';
import { ProductPipe } from './shared/pipes/product.pipe';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuatorComponent,
    AboutComponent,
    SearchResultComponent,
    ProductCategoriesPipe,
    ProductPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ProductService,
    CountryService,
    EndpointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
