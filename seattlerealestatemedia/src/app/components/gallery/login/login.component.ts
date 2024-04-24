import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/data/services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoggingIn = false;

  constructor(
    private authenticationSerivce: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

  }

  login(){
    this.isLoggingIn = true;
    this.authenticationSerivce.signIn({
      email: this.form.value.email,
      password: this.form.value.password
    }).subscribe(()=> {
      this.isLoggingIn = false;
      this.router.navigate(['gallery']) ;
    }, (error:any)=>{
      this.router.navigate(['home']) ;
    })
 }
}
