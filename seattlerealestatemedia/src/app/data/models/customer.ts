export class Customer {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  toString(): string {
    return `${this.firstName} ${this.lastName} (${this.email})`;
  }
}
