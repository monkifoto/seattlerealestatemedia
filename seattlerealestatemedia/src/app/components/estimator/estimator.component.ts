import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/data/models/product.mode';
import { ProductService } from 'src/app/data/services/product.service';
import { customerRequest } from 'src/app/data/models/customerRequest';
import { DatabaseService } from 'src/app/data/services/database.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss'],
})
export class EstimatorComponent implements OnInit {
  listOfBookings: customerRequest[] = [];
  listOfProducts: Product[] = [];
  total: number = 0;
  numberOfBookings: number = 0;

  isSticky: boolean = false;
  bookingCount: number = 0;
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
    '2000 sqft - 2500 sqft',
    '2500 sqft - 3000 sqft',
    '3000 sqft - 3500 sqft',
    '3500 sqft - 4000 sqft',
    '4000 sqft - 5000 sqft',
  ];


  selectedHomeSize: number = 0;
  fakeCustomer = new customerRequest(
    '1',
    'John Doe',
    'johndoe@example.com',
    '1234 Elm Street',
    '4/14/2023',
    '5pm',
    '2000sqft',
    'showcase',
    0,
    1
  );

  today: Date = new Date();

  constructor(
    private productSvc: ProductService,
    private formBuilder: FormBuilder,
    private db: DatabaseService
  ) {}

  ngOnInit() {



    this.db.getBookingsWithMetaData().subscribe({
      next: (res) => {
        //console.log('Next getting bookings ');
      this.listOfBookings = res.map((book: any) =>{
        const data = book.payload.doc.data();
        data.id = book.payload.doc.id;
        return data;

      })
      this.numberOfBookings = this.listOfBookings.length - this.listOfBookings.filter(a => a.Closed ==1).length;
    },
    error:(err)  => {
      console.log('Error getting bookings ' + err);
      return err;
    },
    complete:() =>{
    }

  })


    const tomorrow = new Date(this.today.setDate(this.today.getDate() + 1));

    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
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
      let Closed = 0;
      let cust = new customerRequest(
        '1',
        custName,
        custEmail,
        custAddress,
        custDate,
        custTime,
        custSize,
        listOfPackageNames,
        this.total,
        Closed
      );

      this.db.addBooking(cust);
      this.successNotification(custName);
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
      this.total += this.getPriceBySize(product);
      if (
        product.id == 1 && //Showcase
        this.listOfProducts.find((item) => item.id === 2)?.selected == true //and Esentials already selected
      ) {
        this.listOfProducts[1].selected = false; //find essentials and set selected to false
        this.total -= this.getPriceBySize(this.listOfProducts[1]); // subtract the price of the essentials from total
      } else if (
        product.id == 2 &&
        this.listOfProducts.find((item) => item.id === 1)?.selected == true
      ) {
        this.listOfProducts[0].selected = false;
        this.total -= this.getPriceBySize(this.listOfProducts[0]);
      } else {

      }
    } else {
      this.total -= this.getPriceBySize(product);
      product.selected = false;
      productCard.classList.remove('selected');
    }
  }

  getPriceBySize(product: Product): number{

    const homeSize = this.myForm.get('size')?.value;
    const rateMultiplier: number = product.sqFtPrice;
    let price = product.price;

    if(product.id == 1 || product.id == 2 || product.id == 4 || product.id ==6 || product.id ==7){
    switch(homeSize){
      case '500 sqft - 2000 sqft':
        price = price;
        break;
      case '2000 sqft - 2500 sqft':
        price = price + (rateMultiplier * 1);
        break;
      case '2500 sqft - 3000 sqft':
        price = price + (rateMultiplier * 2);
        break;
      case '3000 sqft - 3500 sqft':
        price = price + (rateMultiplier * 3);
        break;
      case '3500 sqft - 4000 sqft':
        price = price + (rateMultiplier * 4);
        break;
      case '4000 sqft - 5000 sqft':
      price = price + (rateMultiplier * 5);
      break;
    }
  }
  else{
    return product.price;
  }

    return price
  }

  onSelected(): void {
   this.listOfProducts.forEach(item =>{
    if(item.selected == true){
      //this.addToTotal(item) // to be done at a later date for now unselect all selected values
      item.selected = false;
    }
   })
   this.total = 0;
  }

  tinyAlert() {
    Swal.fire('Hey there!');
  }
  successNotification(name: string) {
    Swal.fire('Hi '+ name , 'Thank you for your booking. We will contact you soon to confirm the appointment.', 'success');
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const notes_cart = this.elementRef.nativeElement.querySelector('.notes_cart');
  //   const rect = notes_cart.getBoundingClientRect();
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   this.isSticky = scrollTop >= rect.top;
  // }
}
