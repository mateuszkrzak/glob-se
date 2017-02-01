import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productCategories'})
export class ProductCategoriesPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const obj = {};
        obj[key] = value[key];
        if (value[key].length > 0) {
          keys.push({title: key, products: value[key]});
        }
      }
    }
    return keys;
  }
}
