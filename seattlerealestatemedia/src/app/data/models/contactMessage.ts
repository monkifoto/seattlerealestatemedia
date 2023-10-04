export class contactMessage {
  id: string;
  name: string;
  email: string;
  message: string;


  constructor(id: string, name: string, email: string, message: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
  }

  toString(): string {
    return `Name: ${this.name}<br><br>Email: ${this.email}<br><br>Message: ${this.message}<br><br>`
  }


}
