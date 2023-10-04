export class customerRequest {
  id: string;
  name: string;
  email: string;
  address: string;
  date:string;
  time:string;
  size:string;
  mediaPackage:string;
  total:number;

  constructor(id: string, name: string, email: string, address: string, date: string, time:string, size: string, mediaPackage: string, total: number) {
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
    return `Name: ${this.name}<br><br>Email: ${this.email}<br><br>Property Address: ${this.address}<br><br>Prefered Date: ${this.date}<br><br>Prefered Time: ${this.time}<br><br>Home Size: ${this.size}<br><br>Media Package: ${this.mediaPackage}<br><br><strong>Total:</strong> ${this.total}<br>Id:${this.id}<br>`
  }


}
