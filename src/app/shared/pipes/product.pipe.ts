import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'product'})
export class ProductPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys = [];
      keys.push(value);

    return keys;
  }
}
