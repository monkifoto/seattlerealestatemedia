import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product.mode';
import { ProductService } from 'src/app/product.service';
import { customerRequest } from 'src/app/customerRequest';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss'],
})
export class EstimatorComponent implements OnInit {
  myForm!: FormGroup;
  timeSlots: string[] = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    'Twilight',
  ];

  homeSize: string[] = [
    '500 sqft - 2000 sqft',
    '2000 sqft - 2500  sqft',
    '2500 sqft - 3000 sqft',
    '3000  sqft - 3500 sqft',
    '3500 sqft - 4000 sqft',
    '4000 sqft - 5000 sqft',
  ];

  listOfProducts: Product[] = [];
  total: number = 0;

  selectedHomeSize: number = 0;
  fakeCustomer = new customerRequest(1, 'John Doe', 'johndoe@example.com', '1234 Elm Street','4/14/2023','5pm','2000sqft','showcase');

  constructor(
    private productSvc: ProductService,
    private formBuilder: FormBuilder,
    private store: AngularFirestore
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['Alex', Validators.required],
      email: ['alex@gmail.com', [Validators.required, Validators.email]],
      address: ['15325 Se 155th pl', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      size: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });

    this.listOfProducts = this.productSvc.GetAllProducts();
    const productCards = document.querySelector('.estimator') as HTMLDivElement;
    const cards = Array.from(productCards?.children) as Element[];
  }

  onSubmit(): void {
// why is form not valid when filled

    console.log(this.myForm?.valid);
    console.log(this.myForm.controls['name'].value);
    let custName = this.myForm.controls['name'].value;
    let custEmail = this.myForm.controls['email'].value;
    let custAddress = this.myForm.controls['address'].value;
    let custDate = this.myForm.controls['date'].value;
    let custTime = this.myForm.controls['time'].value;
    let custSize = this.myForm.controls['size'].value;
    let cust = new customerRequest(1,custName,custEmail,custAddress,custDate,custTime,custSize,'showcase');
    console.log(cust);
    this.store.collection('bookingRequests').add(Object.assign({}, cust));
    if (this.myForm?.valid) {
      alert('Book Now Clicked');
    } else {
      console.log('not valid');
    }
  }

  addToTotal(product: Product) {
    const productCard = document.getElementById(
      product.id.toString()
    ) as HTMLDivElement;
    if (product.selected == false) {
      product.selected = true;
      productCard.classList.add('selected');
      console.log('list of products' + this.listOfProducts);
      if (product.id == 1 && this.listOfProducts[1].selected == true) {
        this.listOfProducts[1].selected = false;
        this.total -= this.listOfProducts[1].sqFtPrice;
      } else if (product.id == 2 && this.listOfProducts[0].selected == true) {
        this.listOfProducts[0].selected = false;
        this.total -= this.listOfProducts[0].sqFtPrice;
      } else {
        this.total += product.price;
      }
    } else {
      this.total -= product.price;
      product.selected = false;
      productCard.classList.remove('selected');
    }
  }

  onSelected(value: string): void {
    if (value === this.homeSize[1]) {
      this.selectedHomeSize = 2;
      this.listOfProducts[0].sqFtPrice = this.listOfProducts[0].price + 60;
    } else {
      this.listOfProducts[0].sqFtPrice = this.listOfProducts[0].price;
    }
  }
}
