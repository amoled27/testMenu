import {Component, OnInit} from '@angular/core';
import {ITdDataTableColumn} from "@covalent/core/data-table/data-table.component";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Menu} from "../../interfaces/menu";
import {Router, ActivatedRoute} from "@angular/router";
import {MenuService} from "../../services/menu/menu.service";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['../common-style.css']
})
export class MenuListComponent implements OnInit {

  // Local properties
  menus: Menu[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _menuService: MenuService) {

  }

  ngOnInit() {
    this.loadMenus();


  }

  loadMenus() {
    this._menuService.getListofMenus().subscribe(
      menus => {
        this.menus = menus
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );

  }


  columns: ITdDataTableColumn[] = [
    {name: 'name', label: 'Menu Name '},

  ];


  openPrompt(menuID: any): void {
    console.log("Clicked Menu with ID : " + menuID);

    //https://stackoverflow.com/questions/38634237/how-do-i-navigate-to-a-sibling-route

    this.router.navigate(["menudetail/" + menuID], {relativeTo: this.activatedRoute});


  }


}
