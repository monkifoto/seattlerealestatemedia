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

    this.db.getProductssWithMetaData().subscribe({
      next: (response) => {
        //console.log('Next getting bookings ');
      this.listOfProducts = response.map((product: any) =>{
        const data = product.payload.doc.data();
        data.fireBaseId = product.payload.doc.id;
        //console.log("Subscribe Next: "+data);
        return data;

      }).sort((a,b) => {
        return a.id < b.id ? -1 : 1;
     }).filter(p =>p.active ===true);

      // var activeProducts = this.listOfProducts.filter(p => p.active === true);
      // console.log(activeProducts);
      return this.listOfProducts;
    },
    error:(err)  => {
      console.log('Error getting bookings ' + err);
      return err;
      //alert('Error getting bookings ' + err)
    },
    complete:() =>{
      //console.log('Complete getting bookings ');
    }
  })

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
    // this.listOfProducts = this.productSvc.GetAllProducts();
   // this.listOfProducts = this.productSvc.getListOfActiveProducts();
    // console.log(this.listOfProducts);
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

  addToTotal(selectedProduct: Product) {
  /// Debugging Messaging
  //console.log("----------------------------------- Add To Total -----------------------------------" );
  //this.printOutDebugInfo(selectedProduct);

    if (selectedProduct.selected == false) {  // if the clicked product is not already selected
      selectedProduct.selected = true; // set selected property to tue
      this.total += this.getPriceBySize(selectedProduct);
          if (
            selectedProduct.id == 1 && //Showcase
            this.listOfProducts.find((item) => item.id === 2)?.selected == true //and Esentials already selected
          ) {
            this.listOfProducts[1].selected = false; //find essentials and set selected to false
            this.total -= this.getPriceBySize(this.listOfProducts[1]); // subtract the price of the essentials from total
          }
          else if (
            selectedProduct.id == 2 && //Essentials
            this.listOfProducts.find((item) => item.id === 1)?.selected == true //and Showcase is already selected
          ) {
            this.listOfProducts[0].selected = false;//find shocase and set selected to false
            this.total -= this.getPriceBySize(this.listOfProducts[0]);// subtract the price of the showcase from total
          }
          //handeling bundles. When a bundle is selected, deselect everything else.  Alows to add more to bundle after selection.
          else if(selectedProduct.id >= 15){

            this.listOfProducts.forEach(p => { // loop through all products
              if(p.selected == true && p.id != selectedProduct.id) // if there is anything else selected that is not the selected bundle
              {
                console.log("Found other selected product that is not the current product bundle. - Selected Product ID: " + p.id + " Actual Product ID:  " + selectedProduct.id );
                p.selected = false; //deselect the prduct
                this.total = this.total - this.getPriceBySize(p); // subtract from total the produc that was deselected
              }
              });
          }
          else {

          }

    } else { // if product is already selected
      selectedProduct.selected = false; // deselect product
      this.total -= this.getPriceBySize(selectedProduct);// subtract from total the produc that was deselected
    }
  }

  getPriceBySize(product: Product): number{
    /// Debugging Messaging
    //console.log("++++++++++++++++++++++++++++++++++++ Get Price by size ++++++++++++++++++++++++++++++++++++ ");
    //this.printOutDebugInfo(product);
    const homeSize = this.myForm.get('size')?.value; // get selected home size from dropdown
    let rateMultiplier: number = 0; // initialze multiplier
    if(Number.isNaN(product.sqFtPrice)){
      rateMultiplier = 0;
    }
    else{
      rateMultiplier = product.sqFtPrice;
    }

    let price = product.price;

    console.log ("Home size: "+ homeSize + " Rate Multiplier " + rateMultiplier + " Price : " + price + " Product sqft Price : " + product.sqFtPrice)

    if(product.id == 1 || product.id == 2 || product.id == 4 || product.id ==6 || product.id ==7|| product.id == 15 || product.id == 16 || product.id == 17 || product.id ==18 || product.id ==19){ // if product uses multiplier
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

  successNotification(name: string) {
    Swal.fire('Hi '+ name , 'Thank you for your booking. We will contact you soon to confirm the appointment.', 'success');
  }

  printOutDebugInfo(product: Product){
    console.log("Product Title: " + product.title);
    console.log("Product ID: " + product.id);
    console.log("Product Price: " + product.price);
    console.log("Product BasePrice: " + product.basePrice);
    console.log("Product Sq Ft Price: " + product.sqFtPrice);
    console.log("Product Selected: " + product.selected);
  }

}
