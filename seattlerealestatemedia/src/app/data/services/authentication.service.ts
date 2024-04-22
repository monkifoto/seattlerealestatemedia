import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signIn(params: SignIn):Observable<any>{
    return of({});
  }
}

type SignIn = {
  email:string;
  password:string;
}
