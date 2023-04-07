import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product.mode';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.scss']
})
export class EstimatorComponent implements OnInit  {

	myForm!: FormGroup ;
	timeSlots: string[] = ['8:00 AM - 10:00 AM', '10:00 AM - 12:00 PM',
						   '12:00 PM - 2:00 PM', '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM', 'Twilight'];

	homeSize: string [] = ['500-2000', '2000-2500', '2500-3000', '3000-3500', '3500 - 4000', '4000-5000'];
  
	listOfProducts : Product [] = [];
	total: number = 0;

  constructor(private productSvc : ProductService, private formBuilder: FormBuilder){}

  ngOnInit(){

	this.myForm = this.formBuilder.group({
		name: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		address: ['', Validators.required],
		date: ['', Validators.required],
		time: ['', Validators.required],
		size: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
	  });

    this.listOfProducts = this.productSvc.GetAllProducts();
	const productCards = document.querySelector('.estimator') as  HTMLDivElement;
	const cards = Array.from(productCards?.children) as Element [];
  }

  onSubmit() {
    if (this.myForm?.valid) {
      // Handle form submission logic here
    }
  }

  addToTotal(product: Product) {
	const productCard = document.getElementById(product.id.toString()) as HTMLDivElement;
	if(product.selected == false){
		this.total += product.price;
		product.selected = true;
		productCard.classList.add('selected');
		 console.log('list of products' + this.listOfProducts);
		if(product.id == 1 && this.listOfProducts[1].selected==true){
			this.listOfProducts[1].selected = false;
			this.total -= this.listOfProducts[1].price;
		}
		if(product.id == 2 && this.listOfProducts[0].selected==true){
			this.listOfProducts[0].selected = false;
			this.total -= this.listOfProducts[0].price;
		}
	}
	else{
		this.total -= product.price;
		product.selected = false;
		productCard.classList.remove('selected');
	}
  

  }

  // var bookNowDetails;
  // var name;
  // var email;
  // var address;
  // var displayMessage = '';
  // var appDate;
  // var nameValidation, emailValidation, addressValidation, dateValidation, packageValidation;
  
  
  // /* Grab the data fill in the contact form and submit it. */
  
  // function bookAppointment() {
  //   document.getElementById("ContactForm1_contact-form-name").value = name;
  //   document.getElementById("ContactForm1_contact-form-email").value = email;
  //   document.getElementById("ContactForm1_contact-form-email-message").value = bookNowDetails;
  //   document.getElementById('ContactForm1_contact-form-submit').click();
  
  // }
  

  
  
  // /* Validate Email */
  // function IsEmail(email) {
  //   var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  //   if (!regex.test(email)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  


	// $("#homeSize").change(function() {
	// 	computePrice();
	// });

	// $('#bookNowButton').on('click', function() {
	// 	appDate = $('#appointmentDate').val();
	// 	/* Check fields on every click */
	// 	name = $('#name').val();
	// 	email = $('#email').val();
	// 	address = $('#address').val();



	// 	nameValidation = validateName();
	// 	emailValidation = validateEmail();
	// 	addressValidation = validateAddress();
	// 	dateValidation = validateDate();
	// 	packageValidation = validatePackage();

	// 	if (nameValidation && emailValidation && addressValidation && dateValidation && packageValidation) {
	// 		console.log('Form is Valid');
	// 		displayMessage = "There was a problem completing your booking. Please send your Name, Email, Propery Address and Preferd Date to me via text (425)390-4204 , email or give me a call for scheduling at (425)390-4204..";
	// 		$("#infoMessage").html(displayMessage);
	// 		$('#infoModal').modal('show');
	// 		bookAppointment();
	// 	} else {
	// 		displayMessage = "There was a problem completing your booking. Please make sure the information for your Name, Email, Propery Address and Preferd Date are correct.<br/><br/> If the problem persists contact Alex by phone for scheduling at (425)390-4204.";
	// 		$("#infoMessage").html(displayMessage);
	// 		$('#infoModal').modal('show');
	// 	}
	// });


	// $('.hiddenControl').on('click', function() {

	// 	if (this.id == 'proPkg') {

	// 		setSelectedItem(this);
	// 		if ($('#stdPkg').is(':checked')) {

	// 			$("#stdPkg").prop('checked', false);
	// 			setSelectedItem($("#stdPkg"));
	// 		}
	// 	} else if (this.id == 'stdPkg') {

	// 		setSelectedItem(this);
	// 		if ($('#proPkg').is(':checked')) {

	// 			$("#proPkg").prop('checked', false);
	// 			setSelectedItem($("#proPkg"));
	// 		}

	// 	} else {
	// 		setSelectedItem(this);
	// 	}

	// 	computePrice();

	// });

	// /*Validate Name*/
	// function validateName() {
	// 	var result;

	// 	if ($('#name').val() == '') {
	// 		$('#name').next().show();
	// 		$('html, body').animate({
	// 			scrollTop: ($('.error:visible').offset().top - 140)
	// 		}, 500);
	// 		result = false;
	// 	} else {
	// 		$('#name').next().hide();
	// 		result = true;
	// 	}
	// 	return result;
	// }

	// /*Validate Email*/
	// function validateEmail() {
	// 	var result;
	// 	if ($('#email').val() == '') {
	// 		$('#email').next().show();
	// 		$('html, body').animate({
	// 			scrollTop: ($('.error:visible').offset().top - 140)
	// 		}, 500);
	// 		result = false;
	// 	} else {
	// 		$('#email').next().hide();
	// 		if (IsEmail(email) == false) {
	// 			$('#invalid_email').show();
	// 			result = false;
	// 		} else {
	// 			$('#email').next().hide();
	// 			result = true;
	// 		}
	// 	}
	// 	return result;
	// }

	// /*Validate Address*/
	// function validateAddress() {
	// 	var result;

	// 	if ($('#address').val() == '') {
	// 		$('#address').next().show();
	// 		$('html, body').animate({
	// 			scrollTop: ($('.error:visible').offset().top - 140)
	// 		}, 500);

	// 		result = false;
	// 	} else {
	// 		$('#address').next().hide();
	// 		result = true;
	// 	}
	// 	return result;
	// }

	// /*Validate Date*/
	// function validateDate() {
	// 	var result;

	// 	if ($('#appointmentDate').val() == '') {
	// 		$('#appointmentDate').next().show();
	// 		$('html, body').animate({
	// 			scrollTop: ($('.error:visible').offset().top - 140)
	// 		}, 500);
	// 		result = false;
	// 	} else {
	// 		$('#appointmentDate').next().hide();
	// 		result = true;
	// 	}
	// 	return result;
	// }

	// /*Validate Package*/
	// function validatePackage() {
	// 	var result;
	// 	var stdPkgCheck = false;
	// 	var proPkgCheck = false;

	// 	if ($('#stdPkg').is(':checked')) {
	// 		stdPkgCheck = true;
	// 	}
	// 	if ($('#proPkg').is(':checked')) {
	// 		proPkgCheck = true;
	// 	}


	// 	if (stdPkgCheck || proPkgCheck) {
	// 		$('#invalid_package').hide();
	// 		result = true;
	// 	} else {
	// 		$('#invalid_package').show();
	// 		$('html, body').animate({
	// 			scrollTop: ($('.error:visible').offset().top - 120)
	// 		}, 500);
	// 		result = false;
	// 	}
	// 	return result;
	// }



	// function computePrice() {
	// 	var cost = 0;
	// 	var homeSize = document.getElementById("homeSize").value;
	// 	var rushPkg = document.getElementById("rushDelivery").checked;
	// 	var rushPkgPrice = 0;
	// 	var twilightPkgPrice = 0;
	// 	var twilightPkg = document.getElementById("twilight").checked;
	// 	var stdPkg = document.getElementById("stdPkg").checked;
	// 	var stdPkgPrice = 0;
	// 	var proPkg = document.getElementById("proPkg").checked;
	// 	var proPkgPrice = 0;
	// 	var virtualTourPgk = document.getElementById("virtualTour").checked;
	// 	var virtualTourPgkPrice = 0;
	// 	var zillowTourPkg = document.getElementById("zillowTour").checked;
	// 	var zillowTourPkgPrice = 0;
	// 	var floorPlanPkg = document.getElementById("floorPlan").checked;
	// 	var floorPlanPkgPrice = 75;
	// 	var aerialPhotoPkg = document.getElementById("aerialPhoto").checked;
	// 	var aerialPhotoPkgPrice = 120;
	// 	var aerialVideoPkg = document.getElementById("aerialVideo").checked;
	// 	var aerialVideoPkgPrice = 150;
	// 	var videoPkg = document.getElementById("videoTour").checked;
	// 	var videoPkgPrice = 0;
	// 	var slideShowPkg = document.getElementById("slideShowTour").checked;
	// 	var slideShowPkgPrice = 100;
	// 	var reelTourPkg = document.getElementById("reelTour").checked;
	// 	var reelTourPkgPrice = 120;
	// 	var headshotPkg = document.getElementById("headshot").checked;
	// 	var headshotPkgPrice = 200;
	// 	var homeSizeDescription;


	// 	appDate = document.getElementById("appointmentDate").value;
	// 	name = document.getElementById("name").value;
	// 	email = document.getElementById("email").value;
	// 	address = document.getElementById("address").value;
	// 	var appDisplayTime = "";

	// 	var timeSlotSelection = document.getElementById("timeSlot").value;


	// 	switch (timeSlotSelection) {
	// 		case "1":
	// 			appDisplayTime = "between 8am - 10am";
	// 			break;
	// 		case "2":
	// 			appDisplayTime = "between 10am - 12pm";
	// 			break;
	// 		case "3":
	// 			appDisplayTime = "between 12pm - 2pm";
	// 			break;
	// 		case "4":
	// 			appDisplayTime = "between 2pm - 4pm";
	// 			break;
	// 		case "5":
	// 			appDisplayTime = "between 4pm - 6pm";
	// 			break;
	// 		case "6":
	// 			appDisplayTime = "between 6pm - 8pm";
	// 			break;
	// 	}


	// 	/* Photo Price */
	// 	switch (homeSize) {
	// 		case "1":
	// 			/* 2000 */
	// 			rushPkgPrice = 75;
	// 			twilightPkgPrice = 100;
	// 			stdPkgPrice = 230;
	// 			proPkgPrice = 295;
	// 			virtualTourPgkPrice = 225;
	// 			zillowTourPkgPrice = 150;
	// 			videoPkgPrice = 300;
	// 			homeSizeDescription = 'up to 2000sq. ft.';
	// 			break;
	// 		case "2":
	// 			/* 2500 */
	// 			rushPkgPrice = 75;
	// 			twilightPkgPrice = 100;
	// 			stdPkgPrice = 265;
	// 			proPkgPrice = 355;
	// 			virtualTourPgkPrice = 275;
	// 			zillowTourPkgPrice = 150;
	// 			videoPkgPrice = 350;
	// 			homeSizeDescription = 'between 2001 and 2500sq. ft.';
	// 			break;
	// 		case "3":
	// 			/* 3000 */
	// 			rushPkgPrice = 75;
	// 			twilightPkgPrice = 100;
	// 			stdPkgPrice = 305;
	// 			proPkgPrice = 415;
	// 			virtualTourPgkPrice = 300;
	// 			zillowTourPkgPrice = 200;
	// 			videoPkgPrice = 400;
	// 			homeSizeDescription = 'between 2501 and 3000sq. ft.';
	// 			break;
	// 		case "4":
	// 			/* 3500 */
	// 			rushPkgPrice = 75;
	// 			twilightPkgPrice = 100;
	// 			stdPkgPrice = 365;
	// 			proPkgPrice = 475;
	// 			virtualTourPgkPrice = 325;
	// 			zillowTourPkgPrice = 200;
	// 			videoPkgPrice = 450;
	// 			homeSizeDescription = 'between 3001 and 3500sq. ft.';
	// 			break;
	// 		case "5":
	// 			/* 3500-4000 */
	// 			rushPkgPrice = 150;
	// 			twilightPkgPrice = 100;
	// 			stdPkgPrice = 425;
	// 			proPkgPrice = 535;
	// 			virtualTourPgkPrice = 350;
	// 			zillowTourPkgPrice = 250;
	// 			videoPkgPrice = 500;
	// 			homeSizeDescription = 'between 3501 and 4000sq. ft.';
	// 			break;
	// 		case "6":
	// 			/* 4000-5000 */
	// 			rushPkgPrice = 200;
	// 			twilightPkgPrice = 200;
	// 			stdPkgPrice = 475;
	// 			proPkgPrice = 595;
	// 			virtualTourPgkPrice = 350;
	// 			zillowTourPkgPrice = 250;
	// 			videoPkgPrice = 600;
	// 			homeSizeDescription = 'between 4001 and 5500sq. ft.';
	// 			break;
	// 	}

	// 	if (rushPkg == true) {
	// 		cost = cost + rushPkgPrice;
	// 	}
	// 	if (twilightPkg == true) {
	// 		cost = cost + twilightPkgPrice;
	// 	}
	// 	if (stdPkg == true) {
	// 		cost = cost + stdPkgPrice;
	// 	}
	// 	if (proPkg == true) {
	// 		cost = cost + proPkgPrice;
	// 	}
	// 	if (virtualTourPgk == true) {
	// 		cost = cost + virtualTourPgkPrice;
	// 	}
	// 	if (zillowTourPkg == true) {
	// 		cost = cost + zillowTourPkgPrice;
	// 	}
	// 	if (floorPlanPkg == true) {
	// 		cost = cost + floorPlanPkgPrice;
	// 	}
	// 	if (aerialPhotoPkg == true) {
	// 		cost = cost + aerialPhotoPkgPrice;
	// 	}
	// 	if (aerialVideoPkg == true) {
	// 		cost = cost + aerialVideoPkgPrice;
	// 	}
	// 	if (videoPkg == true) {
	// 		cost = cost + videoPkgPrice;
	// 	}
	// 	if (slideShowPkg == true) {
	// 		cost = cost + slideShowPkgPrice;
	// 	}
	// 	if (reelTourPkg == true) {
	// 		cost = cost + reelTourPkgPrice;
	// 	}
	// 	if (headshotPkg == true) {
	// 		cost = cost + headshotPkgPrice;
	// 	}

	// 	bookNowDetails = 'Name ' + name + ' \r Email ' + email + ' \n\r Property Address ' + address +
	// 		'\n \n Photos for a listing ' + homeSizeDescription + ' with the following options: ' + "\n\r " + "Essential Package \t" + stdPkg + "\r" + "Showcase Package \t" + proPkg + "\r" + "Virtual Tour Package \t" + virtualTourPgk + "\r" + "Zillow Package \t" + zillowTourPkg + "\r" + "Aerial Photo Package \t" + aerialPhotoPkg + "\r" + "Aerial Video Package \t" + aerialVideoPkg + "\r" + "Video Package \t" + videoPkg + "\r" + "Slideshow Package \t" + slideShowPkg + "\r" + "Twilight Package \t" + twilightPkg + "\r" + "Floor Plan Package " + floorPlanPkg + "\r" + "Rush Package \t" + rushPkg + "\r" + "Reel Package \t" + reelTourPkg + "\r" + "Headshot Package \t" + headshotPkg + "\r" + "Total Cost Estimate is $\t" + cost + " \r" + "On the day of " + appDate + " \t" + "Time" + appDisplayTime;

	// 	document.getElementById('totalCost').innerHTML = '$ ' + cost;
	// 	document.getElementById('homeSizeDisplay').innerHTML = bookNowDetails;

}
