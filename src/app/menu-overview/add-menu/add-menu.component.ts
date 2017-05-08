import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../../interfaces/menu";
import {Router, NavigationEnd} from "@angular/router";
import {MenuService} from "../../services/menu/menu.service";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['../common-style.css']
})
export class AddMenuComponent implements OnInit {

  public addMenuForm: FormGroup; // our form model
  responseStatus: Object = [];


  constructor(private fb: FormBuilder,
              private router: Router,
              private _menuService: MenuService,
              public snackBar: MdSnackBar) {

  }

  ngOnInit() {
    this.addMenuForm = this.fb.group({
      menu_name: ['', [Validators.required, Validators.minLength(5)]],
      menu_description: ['', [Validators.required, Validators.minLength(10)]],
      menu_note: ['', [Validators.required, Validators.minLength(10)]],
      enabled: [true]

    })
  }

  save(model: Menu, isValid: boolean) {

    // check if model is valid
    // if valid, call API to save customer
    console.log("Menu Form Component");
    console.log(model, isValid);
    this._menuService.addMenu(model).subscribe(
      data => {
        console.log(this.responseStatus = data);


        let config = new MdSnackBarConfig();
        config.duration = 1500;

        let snackBarRef = this.snackBar.open('Menu  added successfully', '', config);

        snackBarRef.afterDismissed().subscribe(() => {
          this.router.navigate(['/menu']);
        });





      },
      err => console.log(err),
      () => console.log('Request Completed')
    )
  }

  goback() {
    this.router.navigate(['/menu']);

  }

  //TODO: Create menu  and redirect to menud/ and highlight new Menu


}
