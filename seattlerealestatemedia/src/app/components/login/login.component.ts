import { Component, EventEmitter, Output } from '@angular/core';
import { user } from 'src/app/user';
import { DatabaseService } from 'src/app/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() authenticated = new EventEmitter<boolean>();
  username!: string;
  password!: string;


  constructor(private db : DatabaseService){}

  onSubmit() {
    // Perform login logic here, e.g. call an API to authenticate the user
    let adminUser: user;

    this.db.getUsers().subscribe((res)=>{
      adminUser = new user(res[0].userName, res[0].password, res[0].role);

        if(adminUser.userName == this.username && adminUser.password == this.password && adminUser.role=='admin'){
            this.authenticated.emit(true);
        }
        else{
          this.authenticated.emit(false);

        }
    })

  }
}
