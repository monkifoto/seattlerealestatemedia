export class Product {
    constructor(
      public id: number,
      public icon: string,
      public title: string,
      public subtitle:string,
      public features: string [],
      public price: number,
      public sqFtPrice: number,
      public selected : boolean,
    ) {}

  }
