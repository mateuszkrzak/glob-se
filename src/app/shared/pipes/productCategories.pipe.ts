import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productCategories'})
export class ProductCategoriesPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      let obj = {};
      obj[key] = value[key];
      if(value[key].length > 0){
        keys.push({title: key, products: value[key]});
      }
    }
    return keys;
  }
}
