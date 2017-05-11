import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {MenuService} from "../../../services/menu/menu.service";
import{MenuGroupItem} from "../../../interfaces/menu";
@Component({
  selector: 'app-menu-group-dishes',
  templateUrl: './menu-group-dishes.component.html',
  styleUrls: ['../menu-group-detailed-children.component.css']
})
export class MenuGroupDishesComponent implements OnInit {

  private subscription: Subscription;
  private menuGroupID;
  MenuGroupItem:MenuGroupItem[];

  data: any[] = [
    { sku: '546', item: 'Dish 1', price: 32 },
    { sku: '164', item: 'Dish 2', price: 43 },
    { sku: '361', item: 'Dish 3', price: 76 },
    { sku: '581', item: 'Dish 4', price: 45 },
    { sku: '141', item: 'Dish 5', price: 42 }

  ];
  constructor(private router: Router, private route: ActivatedRoute,private _menuService: MenuService) {

  }
  ngOnInit(): void {

    //https://stackoverflow.com/questions/34906888/angular-2-access-parent-routeparams-from-child-component
    this.subscription = this.route.parent.params.subscribe(params => {
      this.menuGroupID = +params["menuGroupID"];
      console.log("Received Parent menuGroupID with id : " + this.menuGroupID + " in MenuGroupDishesComponent")
    });


    this.loadDishes()

  }
loadDishes()
{
  this._menuService.getListofMenuItems(this.menuGroupID).subscribe(
    MenuGroupItem => {
      this.MenuGroupItem = MenuGroupItem;
      console.log(this.MenuGroupItem);
    },
    err => {
      // Log errors if any
      console.log(err);
    }
  );
}
  doRoute(dishID : any){


    console.log("Clicked Dish with ID : " + dishID);

     this.router.navigate(["/menu/dishdetail/" + dishID]);


  }

  addMenuItemToMenuGroupRouter() {
    //Get that MenuGroupID and go to the AddMenuItemComponent
    this.router.navigate(["/menu/addmenuitem/" + this.menuGroupID]);

  }


}
