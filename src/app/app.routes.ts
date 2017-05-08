import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {RestaurantProfileComponent} from "./restaurant-profile/restaurant-profile.component";
import {MenuOverviewComponent} from "./menu-overview/menu-overview.component";
import {MainDashboardComponent} from "./main-dashboard/main-dashboard.component";
import {MenuListComponent} from "./menu-overview/menu-list/menu-list.component";
import {AddMenuComponent} from "./menu-overview/add-menu/add-menu.component";
import {MenuDetailedComponent} from "./menu-overview/menu-detailed/menu-detailed.component";
import {MenuGroupDetailedComponent} from "./menu-overview/menu-group-detailed/menu-group-detailed.component";
import {MenuGroupDishesComponent} from "./menu-overview/menu-group-detailed/menu-group-dishes/menu-group-dishes.component";
import {MenuGroupOptionsComponent} from "./menu-overview/menu-group-detailed/menu-group-options/menu-group-options.component";
import {MenuGroupEditComponent} from "./menu-overview/menu-group-detailed/menu-group-edit/menu-group-edit.component";
import {AddMenuGroupComponent} from "./menu-overview/add-menu-group/add-menu-group.component";
import {AddMenuItemComponent} from "./menu-overview/add-menu-item/add-menu-item.component";
import {BasicRestaurantDetailsComponent} from "./restaurant-profile/basic-restaurant-details/basic-restaurant-details.component";
import {LoginComponent} from "./login/login.component";
import {Angular2TokenService} from "angular2-token";
import {RegisterComponent} from "./register/register.component";
import {MenuGroupDishDetailComponent} from "./menu-overview/menu-group-dish-detail/menu-group-dish-detail.component";
import {MenuGroupOptionDetailComponent} from "./menu-overview/menu-group-option-detail/menu-group-option-detail.component";
import {AddMenuGroupOptionComponent} from "./menu-overview/add-menu-group-option/add-menu-group-option.component";
const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
    {
      component: LoginComponent,
      path: '',
    },
    {
      component: RegisterComponent,
      path: 'register',
    },
    {
      component: MainDashboardComponent,
      path: 'main',
      canActivate: [Angular2TokenService]

      // We'll use the canActivate API and pass in our AuthGuard. Now any time the /special route is hit, the AuthGuard will run first to make sure the user is logged in before activating and loading this route.

    },
    {
      component: MenuOverviewComponent,
      path: 'menu',
      children: [
        {
          component: MenuListComponent,
          path: ''
        },
        {
          component: AddMenuComponent,
          path: 'addmenu'
        },
        {
          component: MenuDetailedComponent,
          path: 'menudetail/:menuID',
        },
        {
          component: MenuGroupDetailedComponent,
          path: 'menugroupdetail/:menuGroupID',
          children: [
            {path: '', redirectTo: 'mgdishes', pathMatch: 'full'},

            {
              component: MenuGroupDishesComponent,
              path: 'mgdishes',

            },
            {
              component: MenuGroupOptionsComponent,
              path: 'mgoptions',

            },
            {
              component: MenuGroupEditComponent,
              path: 'mgedit'
            }
          ]
        },
        {
          component: AddMenuGroupComponent,
          path: 'addmenugroup/:menuID'
        },{
          component: AddMenuItemComponent,
          path: 'addmenuitem/:menuGroupID'
        },{
          component: AddMenuGroupOptionComponent,
          path: 'addmenugroupoption/:menuGroupID'
        },
        {
          component: MenuGroupDishDetailComponent,
          path: 'dishdetail/:dishID'
        },{
          component: MenuGroupOptionDetailComponent,
          path: 'menugroupoptionsdetail/:optionID'
        }


      ]
    },
    {
      component: RestaurantProfileComponent,
      path: 'profile',
      children : [
        {
          component: BasicRestaurantDetailsComponent,
          path: ''
        }
      ]
    },
  ]
  },
];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes);
