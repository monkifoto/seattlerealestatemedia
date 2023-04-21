export class customerRequest {
  id: number;
  name: string;
  email: string;
  address: string;
  date:string;
  time:string;
  size:string;
  mediaPackage:string;
  total:number;

  constructor(id: number, name: string, email: string, address: string, date: string, time:string, size: string, mediaPackage: string, total: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.date = date;
    this.time = time;
    this.size = size;
    this.mediaPackage = mediaPackage;
    this.total = total;
  }

  toString(): string {
    return `Id:${this.id}<br>Name: ${this.name}<br>Email: ${this.email}<br>Property Address: ${this.address}<br>Prefered Date: ${this.date}<br>Prefered Time: ${this.time}<br>Home Size: ${this.size}<br>Media Package: ${this.mediaPackage}<br>Total: ${this.total}`
  }


}
