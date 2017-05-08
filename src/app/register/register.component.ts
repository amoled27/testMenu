import { Component, OnInit } from '@angular/core';
import {RegisterData, Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  private _registerData: RegisterData = <RegisterData>{};
  private _output: any;

  constructor(private _tokenService: Angular2TokenService) { }

  // Submit Data to Backend
  onSubmit() {

    this._output = null;

    this._tokenService.registerAccount(this._registerData).subscribe(
      res => {
        this._registerData  = <RegisterData>{};
        this._output        = res;
        console.log(this._output);
      }, error => {
        this._registerData  = <RegisterData>{};
        this._output        = error;
        console.log(this._output);

      }
    );
  }

}
