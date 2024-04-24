export class Product {
    constructor(
      public active: boolean,
      public basePrice: number,
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
