import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product.mode';
import { ProductService } from 'src/app/product.service';
import { customerRequest } from 'src/app/customerRequest';
import { DatabaseService } from 'src/app/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss'],
})
export class EstimatorComponent implements OnInit {
  isSticky: boolean = false;
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
  listOfBootings: customerRequest[] = [];
  total: number = 0;

  selectedHomeSize: number = 0;
  fakeCustomer = new customerRequest(
    1,
    'John Doe',
    'johndoe@example.com',
    '1234 Elm Street',
    '4/14/2023',
    '5pm',
    '2000sqft',
    'showcase',
    0
  );

  today: Date = new Date();

  constructor(
    private productSvc: ProductService,
    private formBuilder: FormBuilder,
    private store: AngularFirestore,
    private db: DatabaseService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    const tomorrow = new Date(this.today.setDate(this.today.getDate() + 1));

    this.myForm = this.formBuilder.group({
      name: ['Alex', Validators.required],
      email: ['alex@gmail.com', [Validators.required, Validators.email]],
      address: ['15325 Se 155th pl', Validators.required],
      date: ['', Validators.required],
      time: ['4:00 PM - 6:00 PM', Validators.required],
      size: ['500 sqft - 2000 sqft', [Validators.required]],
    });

    this.myForm.get('date')?.patchValue(this.formatDate(tomorrow));
    this.listOfProducts = this.productSvc.GetAllProducts();
    const productCards = document.querySelector('.estimator') as HTMLDivElement;
    const cards = Array.from(productCards?.children) as Element[];
  }

  private formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  onSubmit(): void {
    let listOfSelectedProducts: Product[] = [];
    let listOfPackageNames: string = '';

    listOfSelectedProducts = this.listOfProducts.filter(
      (p) => p.selected == true
    );
    listOfSelectedProducts.forEach((ele) => {
      listOfPackageNames = listOfPackageNames + ele.title + ',';
    });

    if (this.myForm?.valid) {
      let custName = this.myForm.controls['name'].value;
      let custEmail = this.myForm.controls['email'].value;
      let custAddress = this.myForm.controls['address'].value;
      let custDate = this.myForm.controls['date'].value;
      let custTime = this.myForm.controls['time'].value;
      let custSize = this.myForm.controls['size'].value;
      let cust = new customerRequest(
        1,
        custName,
        custEmail,
        custAddress,
        custDate,
        custTime,
        custSize,
        listOfPackageNames,
        this.total
      );
      this.db.addBooking(cust);
    } else {
      console.log('not valid');
    }
  }

  addToTotal(product: Product) {
    const productCard = document.getElementById(
      product.id.toString()
    ) as HTMLDivElement;

    if (product.selected == false) {
      // if the clicked product is not already selected
      product.selected = true; // set selected property to tue
      productCard.classList.add('selected'); // add selected class
      this.total += product.price;
      if (
        product.id == 1 && //Showcase
        this.listOfProducts.find((item) => item.id === 2)?.selected == true //and Esentials already selected
      ) {
        this.listOfProducts[1].selected = false; //find essentials and set selected to false
        this.total -= this.listOfProducts[1].price; // subtract the price of the essentials from total
      } else if (
        product.id == 2 &&
        this.listOfProducts.find((item) => item.id === 1)?.selected == true
      ) {
        this.listOfProducts[0].selected = false;
        this.total -= this.listOfProducts[0].price;
      } else {
        //this.total += product.price;
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

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const notes_cart = this.elementRef.nativeElement.querySelector('.notes_cart');
  //   const rect = notes_cart.getBoundingClientRect();
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   this.isSticky = scrollTop >= rect.top;
  // }
}
