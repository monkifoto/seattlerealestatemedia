export class user {

  userName: string;
  password: string;
  role: string;


  constructor( userName: string, password: string, role : string) {
    this.userName = userName;
    this.password = password;
    this.role = role;

  }

  toString(): string {
    return 'userName: ' + this.userName + ' password: ' + this.password+ ' role: ' + this.password;
  }

}
