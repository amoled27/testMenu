import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {Location} from '@angular/common';
import {MenuService} from "../../services/menu/menu.service";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Component({
  selector: 'app-menu-group-detailed',
  templateUrl: './menu-group-detailed.component.html',
  styleUrls: ['../common-style.css']
})
export class MenuGroupDetailedComponent implements OnInit {


  private subscription: Subscription;
  private menuGroupID;
  responseStatus: Object = [];
  config = new MdSnackBarConfig();

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private  location: Location,
              private _menuService: MenuService   ,
              public  snackBar: MdSnackBar) {


    this.config.duration = 1500;
  }

  ngOnInit() {

    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.menuGroupID = param['menuGroupID'];
        console.log("Accepted Menu Group ID Params with id : " + this.menuGroupID);
      });

  }

  public changeTab(e) {
    console.log(e);

    //TODO: https://stackoverflow.com/questions/38634237/how-do-i-navigate-to-a-sibling-route


    switch (e.index) {
      case 0:
        this.router.navigate([`./mgdishes`], {relativeTo: this.activatedRoute});
        break;
      case 1:
        this.router.navigate([`./mgoptions`], {relativeTo: this.activatedRoute});
        break;
      case 2:
        this.router.navigate([`./mgedit`], {relativeTo: this.activatedRoute});
        break;

    }
  }

  goback() {
    //TODO: This buttons action is so fucked. Fixx it. Changing tabs will fuck the history up so bad.
    this.router.navigate([`./menudetail/${this.menuGroupID}`], {relativeTo: this.activatedRoute});


  }

  deleteMenuGroup() {
    this._menuService.deleteMenuGroup(this.menuGroupID).subscribe(
      data => {
        console.log(this.responseStatus = data);


        let snackBarRef = this.snackBar.open('Menu Group deleted successfully', '', this.config);

        snackBarRef.afterDismissed().subscribe(() => {
          this.location.back();
        });


      },
      err => console.log(err),
      () => console.log('Request Completed')
    )
  }
}
