import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FinderComponent } from './finder/finder.component';
import { AboutComponent } from './about/about.component';
import { SearchResultComponent } from './search-result/search-result.component';


import { ProductService } from './shared/services/product.service';
import { CountryService } from './shared/services/country.service';
import { EndpointService } from './shared/services/endpoint.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    AboutComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
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
