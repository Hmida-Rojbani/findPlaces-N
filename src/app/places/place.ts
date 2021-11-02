export class Place {

  constructor(
    public id: string,
    public title: string,
    public address: string,
    public img: string,
    public price: number,
    public availableFrom: Date,
    public availableTo: Date
  ){}

}
