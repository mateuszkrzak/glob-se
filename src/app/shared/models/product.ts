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
