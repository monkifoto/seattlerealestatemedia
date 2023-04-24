export class emailMessage {

  to: string;
  message: string;


  constructor( to: string, messageStr: string) {
    this.to = to;
    this.message = messageStr;

  }
}
