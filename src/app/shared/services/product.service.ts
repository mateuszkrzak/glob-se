import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ProductCategories } from '../models/productCategories';
import { EndpointService } from './endpoint.service';

@Injectable()
export class ProductService {
  constructor (private http: Http, private endPointService: EndpointService) {}

  getProducts (params): Observable<ProductCategories[]> {
    return this.http.get(this.endPointService.getEndpoint() + 'products', {search : params})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || { };
  }

  private handleError (error: Response | any) {
    let errMsg: any;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errMsg = `${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}




