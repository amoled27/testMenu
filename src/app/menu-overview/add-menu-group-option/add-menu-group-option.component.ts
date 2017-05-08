import {Component, OnInit} from '@angular/core';
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";
import {MenuService} from "../../services/menu/menu.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {MenuGroupOption} from "../../interfaces/menu";

@Component({
  selector: 'app-add-menu-group-option',
  templateUrl: './add-menu-group-option.component.html',
  styleUrls: ['../common-style.css']
})


export class AddMenuGroupOptionComponent implements OnInit {


  private subscription: Subscription;
  private menuGroupID;

  public addMenuGroupOption: FormGroup; // our form model
  responseStatus: Object = [];

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private  location: Location,
              private router: Router,
              private _menuService: MenuService,
              public snackBar: MdSnackBar) {

  }

  ngOnInit() {


    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.menuGroupID = param['menuGroupID'];
        console.log("Accepted menu Group ID Params with id for creating a Menu Group under it: " + this.menuGroupID);
      });


    this.addMenuGroupOption = this.fb.group({
      menu_group_option_name: ['', [Validators.required, Validators.minLength(5)]],
      menu_group_option_info: ['', [Validators.required, Validators.minLength(10)]],
      enabled: [true],


    })

  }

  save(model: MenuGroupOption, isValid: boolean) {

    console.log(model, isValid);


    this._menuService.addMenuGroupOption(model, this.menuGroupID).subscribe(
      data => {
        console.log(this.responseStatus = data);

        let config = new MdSnackBarConfig();
        config.duration = 1500;

        let snackBarRef = this.snackBar.open('Menu Item added successfully', '', config);

        snackBarRef.afterDismissed().subscribe(() => {
          this.location.back();
        });

      },
      err => console.log(err),
      () => console.log('Request Completed')
    )

  }


  goback() {
    this.location.back();

  }

}

