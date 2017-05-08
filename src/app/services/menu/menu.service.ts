import {Injectable} from '@angular/core';
import {CookieService} from "angular2-cookie/services/cookies.service";
import {Angular2TokenService} from "angular2-token";
import {Menu, MenuGroup, MenuGroupItem, MenuGroupOption} from "../../interfaces/menu";
import {Observable} from "rxjs";

@Injectable()
export class MenuService {

  restID: String;

  constructor(private _cookieService: CookieService, private _tokenService: Angular2TokenService) {
    this.restID = this._cookieService.get("restID")
    console.log("RestaurantID from Cookie Service is : " + this.restID);
  }

  addMenu(menu: Menu): Observable<Menu> {
    return this._tokenService.post('restaurants/' + this.restID + '/menus', menu)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }


  getMenu(menuID: number): Observable<Menu> {
    return this._tokenService.get(`menus/${menuID}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  patchMenu(menu: Menu,menuID: number ): Observable<Menu> {
    return this._tokenService.patch(`menus/${menuID}` , menu)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  deleteMenu(menuID: number): Observable<Menu> {
    return this._tokenService.delete(`menus/${menuID}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  getListofMenus(): Observable<Menu[]> {
    return this._tokenService.get('restaurants/' + this.restID + '/menus')
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );

  }


  //MENU GROUPS

  addMenuGroup(menuGroup: MenuGroup, menuID: number): Observable<MenuGroup> {
    return this._tokenService.post(`menus/${menuID}/menu_groups`, menuGroup)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  getMenuGroup(menuGroupID: number): Observable<MenuGroup> {
    return this._tokenService.get(`menu_groups/${menuGroupID}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  patchMenuGroup(menuGroup: MenuGroup,menuGroupID: number ): Observable<MenuGroup> {
    return this._tokenService.patch(`menu_groups/${menuGroupID}` , menuGroup)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  deleteMenuGroup(menuGroupID: number): Observable<MenuGroup> {
    return this._tokenService.delete(`menu_groups/${menuGroupID}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  getListofMenuGroups(menuID: number) : Observable<MenuGroup[]>{
    return this._tokenService.get(`menus/${menuID}/menu_groups`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }



  //--------------------------DISHES-------------------------------

  addMenuItem(menuGroupItem: MenuGroupItem, menuGroupID: number): Observable<MenuGroupItem> {
    return this._tokenService.post(`menu_groups/${menuGroupID}/menu_items`, menuGroupItem)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  getMenuItem(menuGroupItemID: number): Observable<MenuGroupItem> {
    return this._tokenService.get(`menu_items/${menuGroupItemID}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  patchMenuItem(menuGroupItem: MenuGroup,menuGroupItemID: number ): Observable<MenuGroupItem> {
    return this._tokenService.patch(`menu_items/${menuGroupItemID}` , menuGroupItem)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  deleteMenuItem(menuGroupItemID: number): Observable<MenuGroupItem> {
    return this._tokenService.delete(`menu_items/${menuGroupItemID}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  getListofMenuItems(menuGroupID: number) : Observable<MenuGroupItem[]>{
    return this._tokenService.get(`menu_groups/${menuGroupID}/menu_items`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }



  //--------------------------OPTIONS-------------------------------

  addMenuGroupOption(menuGroupOption: MenuGroupOption, menuGroupID: number): Observable<MenuGroupOption> {
    return this._tokenService.post(`menu_groups/${menuGroupID}/menu_group_options`, menuGroupOption)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  getMenuGroupOption(menuGroupOptionID: number): Observable<MenuGroupOption> {
    return this._tokenService.get(`menu_group_options/${menuGroupOptionID}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  patchMenuGroupOption(menuGroupOption: MenuGroupOption,menuGroupOptionID: number ): Observable<MenuGroupOption> {
    return this._tokenService.patch(`menu_group_options/${menuGroupOptionID}` , menuGroupOption)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  deleteMenuGroupOption(menuGroupOptionID: number): Observable<MenuGroupOption> {
    return this._tokenService.delete(`menu_group_options/${menuGroupOptionID}`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }

  getListofMenuGroupOptions(menuGroupID: number) : Observable<MenuGroupOption[]>{
    return this._tokenService.get(`menu_groups/${menuGroupID}/menu_group_options`)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );
  }



}

