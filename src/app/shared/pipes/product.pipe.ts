import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'product'})
export class ProductPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
      keys.push(value);

    return keys;
  }
}
