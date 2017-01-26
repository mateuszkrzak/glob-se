import { Injectable } from '@angular/core';

@Injectable()
export class EndpointService {
  backendUrl = "http://test.api.globkurier.pl/v1/";

  constructor() { }

  getEndpoint () {
    return this.backendUrl;
  }
}
