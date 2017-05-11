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


  constructor(private router: Router, private route: ActivatedRoute,private _menuService: MenuService) {

  }
  ngOnInit(): void  {

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

  //  data: any[] = [
  //   { sku: , item:  , price:  }
  //   // { sku: '164', item: 'Option 2', price: 43 },
  //   // { sku: '361', item: 'Option 3', price: 76 },
  //   // { sku: '581', item: 'Option 4', price: 45 },
  //   // { sku: '141', item: 'Option 5', price: 42 }

  // ];

  addMenuItemToMenuGroupRouter() {
    //Get that MenuGroupID and go to the AddMenuItemComponent
    this.router.navigate(["/menu/addmenuitem/" + this.menuGroupID]);

  }


}
