import { Product } from './product';
export class ProductCategories {
  constructor(
    public standard: Product[],
    public noon: Product[],
    public morning: Product[],
    public fast: Product[],
    public superfast: Product[]

  ) { }
}
