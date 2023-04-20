import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  onSubmit() {
    // Perform login logic here, e.g. call an API to authenticate the user
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // You can replace the above console.log statements with your actual login logic
  }
}
