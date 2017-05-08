import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu-group-options',
  templateUrl: './menu-group-options.component.html',
  styleUrls: ['../menu-group-detailed-children.component.css']
})
export class MenuGroupOptionsComponent implements OnInit {


  private subscription: Subscription;
  private menuGroupID;

  data: any[] = [
    { sku: '546', item: 'Option 1', price: 32 },
    { sku: '164', item: 'Option 2', price: 43 },
    { sku: '361', item: 'Option 3', price: 76 },
    { sku: '581', item: 'Option 4', price: 45 },
    { sku: '141', item: 'Option 5', price: 42 }

  ];

  constructor(private router: Router, private route: ActivatedRoute) {



  }

  ngOnInit() {
    //https://stackoverflow.com/questions/34906888/angular-2-access-parent-routeparams-from-child-component
    this.subscription = this.route.parent.params.subscribe(params => {
      this.menuGroupID = +params["menuGroupID"];
      console.log("Received Parent menuGroupID with id : " + this.menuGroupID + " in MenuGroupOptionsComponent")
    });
  }


  doRoute(mgoptionsid : any){

    console.log("Clicked MG Options with ID : " + mgoptionsid);
    this.router.navigate(["/menu/menugroupoptionsdetail/" + mgoptionsid]);

  }


  addMenuGroupOptionToMenuGroupRouter(){
    //Get that MenuGroupID and go to the AddMenuItemComponent
    this.router.navigate(["/menu/addmenugroupoption/" + this.menuGroupID]);
  }

}
