import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {MenuService} from "../../../services/menu/menu.service";
import {MenuGroup} from "../../../interfaces/menu";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Component({
  selector: 'app-menu-group-edit',
  templateUrl: './menu-group-edit.component.html',
  styleUrls: ['../menu-group-detailed-children.component.css']
})
export class MenuGroupEditComponent implements OnInit {

  private subscription: Subscription;
  private menuGroupID;
  responseStatus: Object = [];

  public editMenuGroupForm: FormGroup; // our form model
  config = new MdSnackBarConfig();

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private _menuService: MenuService,
              public  snackBar: MdSnackBar) {
    this.config.duration = 1500;


  }

  ngOnInit() {
    //https://stackoverflow.com/questions/34906888/angular-2-access-parent-routeparams-from-child-component
    this.subscription = this.route.parent.params.subscribe(params => {
      this.menuGroupID = +params["menuGroupID"];
      console.log("Received Parent menuGroupID with id : " + this.menuGroupID + " in MenuGroupEditComponent")
    });

    this.editMenuGroupForm = this.fb.group({
      menu_group_name: ['', [Validators.required, Validators.minLength(5)]],
      menu_group_description: ['', [Validators.required, Validators.minLength(10)]],
      menu_group_note: ['', [Validators.required, Validators.minLength(10)]],
      enabled: [true]

    });

    this.loadMenuGroupDetail();

  }

  loadMenuGroupDetail() {
    this._menuService.getMenuGroup(this.menuGroupID).subscribe(
      data => {
        console.log(data);


        this.editMenuGroupForm.controls['menu_group_name'].setValue(data.menu_group_name);
        this.editMenuGroupForm.controls['menu_group_description'].setValue(data.menu_group_description);
        this.editMenuGroupForm.controls['menu_group_note'].setValue(data.menu_group_note);
        this.editMenuGroupForm.controls['enabled'].setValue(data.enabled);

      },
      err => console.log(err),
    );
  }

  save(model: MenuGroup, isValid: boolean) {

    // check if model is valid
    // if valid, call API to save customer
    console.log("Menu Form Component");
    console.log(model, isValid);

    this._menuService.patchMenuGroup(model, this.menuGroupID).subscribe(
      data => {
        console.log(this.responseStatus = data);


        let snackBarRef = this.snackBar.open('Menu Group updated successfully', '', this.config);

        snackBarRef.afterDismissed().subscribe(() => {
          this.loadMenuGroupDetail();
        });


      },
      err => console.log(err),
      () => console.log('Request Completed')
    );
  }

}
