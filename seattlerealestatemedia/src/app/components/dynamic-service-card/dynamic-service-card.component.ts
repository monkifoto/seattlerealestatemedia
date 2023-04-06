import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.mode';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-dynamic-service-card',
  templateUrl: './dynamic-service-card.component.html',
  styleUrls: ['./dynamic-service-card.component.scss']
})
export class DynamicServiceCardComponent {

  @Input() productType : string = "";
  @Input() productObj : Product | undefined ;


product? : Product;
constructor(private productSvc: ProductService){}

ngOnInit(){
  if(this.productType === ""){
    this.product = this.productObj
  }
  else{
    this.product = this.productSvc.GetProducts(this.productType);
  }
}

}
