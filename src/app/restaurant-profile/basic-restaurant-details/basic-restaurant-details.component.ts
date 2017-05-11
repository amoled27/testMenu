import {Component, OnInit} from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {FormBuilder, Validators, FormGroup,FormArray} from "@angular/forms";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";
import {RestaurantObject} from "../../interfaces/restaurant/restaurant-basic";
import {AmenityType} from "../../interfaces/restaurant/restaurant-basic";
import {RestaurantService} from "../../services/restaurant/restaurant.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-basic-restaurant-details',
  templateUrl: './basic-restaurant-details.component.html',
  styleUrls: ['../common-style.css']
})
export class BasicRestaurantDetailsComponent implements OnInit {
  public AddRestaurantProfile:FormGroup;
    responseStatus: Object = [];

  constructor(private _tokenService: Angular2TokenService, private fb: FormBuilder,
    public snackBar: MdSnackBar, private  location:Location,private RestaurantService: RestaurantService,) {
  }

  ngOnInit() {
    this.AddRestaurantProfile = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      brief_description: ['', Validators.minLength(10)],
      full_description: ['', [Validators.required, Validators.minLength(20)]],
      business_type: ['', [Validators.required]],
      establishment_type: ['', [Validators.required]],
      average_cost_for_two: ['', [Validators.required]],
      price_range: ['', []],
      default_currency: ['', [Validators.required]],
      temporary_closed: [false],
      amenity_types:this.fb.array([
      //  this.initAmenityType(),
      ])

    });
}

/*initAmenityType()
{
  return this.fb.group({
    type_name:['',Validators.required]
  });
}

addAmenityType()
{
  const control= <FormArray>this.AddRestaurantProfile.controls["amenity_types"];
  control.push(this.initAmenityType());
}
*/

save(model: RestaurantObject, isValid: boolean) {

  console.log(model, isValid);

  this.RestaurantService.AddRestaurantProfile(model).subscribe(
    data => {
      console.log(this.responseStatus = data);

      let config = new MdSnackBarConfig();
      config.duration = 1500;

      let snackBarRef = this.snackBar.open('Restaurant added successfully', '', config);

      snackBarRef.afterDismissed().subscribe(() => {
        this.location.back();

      });

    },
    err => console.log(err),
    () => console.log('Request Completed')
  )


}





}
