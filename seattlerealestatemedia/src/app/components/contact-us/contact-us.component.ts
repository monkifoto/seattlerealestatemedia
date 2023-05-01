import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

    formData = {
      name: '',
      email: '',
      message: ''
    };

    onSubmit() {
      // Code to submit the form data to the server goes here
      console.log(this.formData);
    }

  }


