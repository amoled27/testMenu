import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Menu, MenuGroup} from "../../interfaces/menu";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {ITdDataTableColumn} from "@covalent/core/data-table/data-table.component";
import {MenuService} from "../../services/menu/menu.service";
import {MdSnackBarConfig, MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-menu-detailed',
  templateUrl: './menu-detailed.component.html',
  styleUrls: ['../common-style.css']
})
export class MenuDetailedComponent implements OnInit {

  public editMenuForm: FormGroup; // our form model

  private subscription: Subscription;
  private menuID;
  responseStatus: Object = [];

  // Local properties
  menuGroup: MenuGroup[];

  config = new MdSnackBarConfig();

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private  location: Location,
              private _menuService: MenuService,
              public  snackBar: MdSnackBar) {


    this.config.duration = 1500;


  }

  ngOnInit() {

    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.menuID = param['menuID'];
        console.log("Accepted Menu ID Params with id : " + this.menuID);
      });


    this.editMenuForm = this.fb.group({
      menu_name: ['', [Validators.required, Validators.minLength(5)]],
      menu_description: ['', [Validators.required, Validators.minLength(10)]],
      menu_note: ['', [Validators.required, Validators.minLength(10)]],
      enabled: [true]

    });

    this.loadMenuDetail();
    this.loadMenuGroups();

  }

  loadMenuDetail() {
    this._menuService.getMenu(this.menuID).subscribe(
      data => {
        console.log(data);


        this.editMenuForm.controls['menu_name'].setValue(data.menu_name);
        this.editMenuForm.controls['menu_description'].setValue(data.menu_description);
        this.editMenuForm.controls['menu_note'].setValue(data.menu_note);
        this.editMenuForm.controls['enabled'].setValue(data.enabled);

      },
      err => console.log(err),
    );

  }

  loadMenuGroups() {
    this._menuService.getListofMenuGroups(this.menuID).subscribe(
      menuGroup => {
        this.menuGroup = menuGroup
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );
  }

  save(model: Menu, isValid: boolean) {

    // check if model is valid
    // if valid, call API to save customer
    console.log("Menu Form Component");
    console.log(model, isValid);

    this._menuService.patchMenu(model, this.menuID).subscribe(
      data => {
        console.log(this.responseStatus = data);


        let snackBarRef = this.snackBar.open('Menu  updated successfully', '', this.config);

        snackBarRef.afterDismissed().subscribe(() => {
          this.loadMenuDetail();
        });


      },
      err => console.log(err),
      () => console.log('Request Completed')
    );
  }


  deleteMenu() {

    this._menuService.deleteMenu(this.menuID).subscribe(
      data => {
        console.log(this.responseStatus = data);


        let snackBarRef = this.snackBar.open('Menu  deleted successfully', '', this.config);

        snackBarRef.afterDismissed().subscribe(() => {
          this.location.back();
        });


      },
      err => console.log(err),
      () => console.log('Request Completed')
    )
  }

  expandedEvent(): void {
  }

  collapsedEvent(): void {

  }


  columns: ITdDataTableColumn[] = [
    {name: 'name', label: 'Menu Group Name '},

  ];


  openPrompt(menuGroupID: any): void {
    console.log("Clicked Menu Group with ID : " + menuGroupID);

    //https://stackoverflow.com/questions/38634237/how-do-i-navigate-to-a-sibling-route

    //todo: fuck off

    // this.router.navigate(["../menugroupdetail/"]);
    this.router.navigate(["/menu/menugroupdetail/" + menuGroupID + "/mgdishes"]);


  }

  addMenuGroupToMenuRouter() {
    //Get Menu Id from parent and go to Component
    this.router.navigate(["/menu/addmenugroup/" + this.menuID]);

  }

  goback() {
    // this.router.navigate(['/menu']);
    this.location.back();

  }


}
