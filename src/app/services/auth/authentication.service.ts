import {Injectable} from '@angular/core';
import {Angular2TokenService, SignInData} from "angular2-token";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {RestaurantObject} from "../../interfaces/restaurant/restaurant-basic";

@Injectable()
export class AuthenticationService {

  constructor(private _tokenService: Angular2TokenService) {
  }


  performLogin(signInData: SignInData): Observable<Response> {
    return this._tokenService.signIn(signInData)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  getRestaurantID(): Observable<RestaurantObject> {
    return this._tokenService.get('restaurants/')
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }



}
