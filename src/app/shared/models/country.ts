export class Country {
  constructor(
    public id: number,
    public height: string,
    public isoCode: string,
    public isUEMember: boolean,
    public isRoadTransportAvailable: boolean
  ) { }
}
