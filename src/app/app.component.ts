import { Component } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({


      apiPath: environment.apiPath,

      signInPath:                 'admin_auth/sign_in',

      signOutPath:                'admin_auth/sign_out',
      validateTokenPath:          'admin_auth/validate_token',

      registerAccountPath:        'admin_auth',


    });
  }
}
