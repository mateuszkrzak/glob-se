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

// standard	Product[]	Produkty standardowe
// noon	Product[]	Produkty możliwe do realizacji do południa kolejnego dnia. Dostępność produktu należy potwierdzić wykonując ponownie wycenę z polem receiverPostCode, jeżeli pole te nie było wcześniej przekazane
// morning	Product[]	Produkty możliwe do realizacji rano kolejnego dnia. Dostępność produktu należy potwierdzić wykonując ponownie wycenę z polem receiverPostCode, f pole te nie było wcześniej przekazane
// fast	Product[]	Produkty możliwe do realizacji od 5 do 10 godzin. Pole pojawia się po przekazaniu pól senderPostCode oraz receiverPostCode
// superfast	Product[]	Produkty możliwe do realizacji od 3 do 6 godzin. Pole pojawia się po przekazaniu pól senderPostCode oraz receiverPostCode
