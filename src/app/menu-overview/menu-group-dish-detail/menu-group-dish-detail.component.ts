import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu/menu.service";
import {MenuGroupItem} from "../../interfaces/menu";
import {Subscription} from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu-group-dish-detail',
  templateUrl: './menu-group-dish-detail.component.html',
  styleUrls: ['./menu-group-dish-detail.component.css']
})
export class MenuGroupDishDetailComponent implements OnInit {

  private menuGroupItemID;
  private subscription: Subscription;
  menuGroupItem:MenuGroupItem;

  constructor(private _menuService: MenuService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(){
    //https://stackoverflow.com/questions/34906888/angular-2-access-parent-routeparams-from-child-component
    // this.subscription = this.route.parent.params.subscribe(params => {
    //   this.menuGroupItemID = +params["menuGroupItemID"];
    //   console.log("Received Parent menuGroupItemID with id : " + this.menuGroupItemID + " in MenuGroupDisheDetailComponent")
    // });
     this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.menuGroupItemID = param['DishID'];
        console.log("Accepted Menu Group ID Params with id : " + this.menuGroupItemID);
      });

    this.getDishDetail();
 

  }

  getDishDetail(){
    this._menuService.getMenuItem(this.menuGroupItemID).subscribe(
      menuGroupItem => {
        this.menuGroupItem = menuGroupItem;
        console.log("ulala"+ menuGroupItem);
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    )
  }

}
