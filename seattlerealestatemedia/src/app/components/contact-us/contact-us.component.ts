import { Component } from '@angular/core';
import { customerRequest } from 'src/app/data/models/customerRequest';
import { DatabaseService } from 'src/app/data/services/database.service';
import { contactMessage } from 'src/app/data/models/contactMessage';

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

    constructor(private db: DatabaseService){}

    onSubmit() {
      let cm = new contactMessage(
        '',
        this.formData.name,
        this.formData.email,
        this.formData.message

      )
      this.db.sendContactRequest(cm);
    }

  }


