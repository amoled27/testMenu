import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Location} from '@angular/common';
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";
import {MenuService} from "../../services/menu/menu.service";
import {MenuGroupItem} from "../../interfaces/menu";

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['../common-style.css']})


export class AddMenuItemComponent implements OnInit {

  private subscription: Subscription;
  private menuGroupID;

  public addMenuItem: FormGroup; // our form model
  responseStatus: Object = [];

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute ,
              private  location :Location,
              private router: Router,
              private _menuService: MenuService,
              public snackBar: MdSnackBar) {

  }

  ngOnInit() {


    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.menuGroupID = param['menuGroupID'];
        console.log("Accepted menu Group ID Params with id for creating a Menu Item under it: " + this.menuGroupID);
      });


    this.addMenuItem = this.fb.group({
      menu_item_name: ['', [Validators.required, Validators.minLength(5)]],
      menu_item_description: ['', [Validators.required, Validators.minLength(10)]],
      menu_item_price: ['', [Validators.required]],
      enabled: [true],

      special: [false],
      vegetarian: [false],
      vegan: [false],
      kosher: [false],
      halal: [false],
      gluten_free: [false],

      menu_item_calories: ['', []],
      menu_item_heat_index: ['', []],


    })

  }

  save(model: MenuGroupItem, isValid: boolean) {

    console.log(model, isValid);

    this._menuService.addMenuItem(model, this.menuGroupID).subscribe(
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
