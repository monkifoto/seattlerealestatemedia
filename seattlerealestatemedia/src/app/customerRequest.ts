export class customerRequest {
  id: number;
  name: string;
  email: string;
  address: string;
  date:string;
  time:string;
  size:string;
  mediaPackage:string;

  constructor(id: number, name: string, email: string, address: string, date: string, time:string, size: string, mediaPackage: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.date = date;
    this.time = time;
    this.size = size;
    this.mediaPackage = mediaPackage;
  }
}
