import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Location} from '@angular/common'
import {MenuService} from "../../services/menu/menu.service";
import {MenuGroup} from "../../interfaces/menu";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Component({
  selector: 'app-add-menu-group',
  templateUrl: './add-menu-group.component.html',
  styleUrls: ['../common-style.css']
})
export class AddMenuGroupComponent implements OnInit {

  private subscription: Subscription;
  private menuID;

  public addMenuGroupForm: FormGroup; // our form model
  responseStatus: Object = [];


  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private  location: Location,
              private _menuService: MenuService,
              public snackBar: MdSnackBar) {

  }

  ngOnInit() {


    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.menuID = param['menuID'];
        console.log("Accepted Menu ID Params with id for creating a Menu Group under it: " + this.menuID);
      });

    this.addMenuGroupForm = this.fb.group({
      menu_group_name: ['', [Validators.required, Validators.minLength(5)]],
      menu_group_description: ['', [Validators.required, Validators.minLength(10)]],
      menu_group_note: ['', [Validators.required, Validators.minLength(10)]],
      enabled: [true]

    })
  }

  save(model: MenuGroup, isValid: boolean) {

    // check if model is valid
    // if valid, call API to save customer
    console.log("Menu Form Component");
    console.log(model, isValid);

    this._menuService.addMenuGroup(model, this.menuID).subscribe(
      data => {
        console.log(this.responseStatus = data);

        let config = new MdSnackBarConfig();
        config.duration = 1500;

        let snackBarRef = this.snackBar.open('Menu Group added successfully', '', config);

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


  //TODO: Create menu group and redirect to menudetail/:menuID and highlight new Group
}
