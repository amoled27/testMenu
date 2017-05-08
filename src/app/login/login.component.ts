import {Component, OnInit} from '@angular/core';
import {SignInData, Angular2TokenService} from "angular2-token";
import {Router, ActivatedRoute} from "@angular/router";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {AuthenticationService} from "../services/auth/authentication.service";
import {RestaurantObject} from "../interfaces/restaurant/restaurant-basic";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  private _signInData: SignInData = <SignInData>{};
  private restaurantObject: RestaurantObject;


  constructor(private _tokenService: Angular2TokenService,
              private router: Router,
              private route: ActivatedRoute,
              private _cookieService:CookieService ,
              private _authenticationService: AuthenticationService) { }


  ngOnInit() {
    if (this._tokenService.userSignedIn()) {
      this.router.navigate(["../main"], {relativeTo: this.route});
    }
  }

  // Submit Data to Backend
  onSubmit() {

    this._authenticationService.performLogin(this._signInData).subscribe(
      data => {
        console.log(data);
        this._authenticationService.getRestaurantID().subscribe(
          restaurantObject => {
            this.restaurantObject = restaurantObject;
            console.log(this.restaurantObject);
            this._cookieService.put("restID", String(this.restaurantObject.id));
            this.router.navigate(["../main"],   {relativeTo: this.route});
            //TODO: FIX COOKIE SERVICE ON REGISTER TO ALSO SAVE IT THERE
          },
          err => {
            console.log(err);
          });


      },
      err => console.log(err),
    );
  }
}
