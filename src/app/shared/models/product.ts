export class Product {
  constructor(
    public id: number,
    public carrierLogoLink: string,
    public name: string,
    public carrierName: string,
    public netPrice: number,
    public grossPrice: number,
    public protocolAvailable: boolean,
    public collectionTypes: string[],
    public transportType: string,
    public requiredAddonIds: number[],
    public requiredAlternativeAddonIds: number[]
  ) { }
}
// id	int	Identyfikator
// carrierLogoLink	string	Adres do logotypu przewoźnika
// name	string	Nazwa
// carrierName	string	Nazwa przewoźnika
// netPrice	float	Cena bazowa netto
// grossPrice	float	Cena bazowa brutto
// protocolAvailable	bool	Czy jest dostępna generacja protokołu zbiorczego /order/protocol
// collectionTypes	CollectionType[]	Dostępne dla danego produktu typy nadania
// transportType	string	Typ transportu
// requiredAddonIds	int[]	Lista wymaganych dodatków do produktu. Wymiary podane do wyszukiwarki mogą spowodować iż aby złożyć zamówienie trzeba będzie poza dodatkami wybranymi przez klienta przekazać również wybór wskazanych na liście dodatków obowiązkowych.
//   requiredAlternativeAddonIds	[int[]]	Lista wymaganych alternatywnych zestawów dodatków do produktu. Tablica zawiera tablice identyfikatorów dodatków, spośród których użytkownik musi wybrać przynajmniej jeden aby zamówienie zostało przyjęte.
