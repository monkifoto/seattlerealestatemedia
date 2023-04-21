import { Component } from '@angular/core';
import { user } from 'src/app/user';
import { DatabaseService } from 'src/app/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;
  adminUser : user | undefined;

  constructor(private db : DatabaseService){}

  onSubmit() {
    // Perform login logic here, e.g. call an API to authenticate the user
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.db.getUsers().subscribe (
      data => this.adminUser,
      () => console.log(this.adminUser)
    );



    // You can replace the above console.log statements with your actual login logic
  }
}
