import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import 'hammerjs';
import {MainComponent} from './main/main.component';
import {MenuOverviewComponent} from './menu-overview/menu-overview.component';
import {RestaurantProfileComponent} from './restaurant-profile/restaurant-profile.component';
import {appRoutes, appRoutingProviders} from "./app.routes";
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {CovalentCoreModule} from '@covalent/core';
import {MenuListComponent} from './menu-overview/menu-list/menu-list.component';
import {AddMenuComponent} from './menu-overview/add-menu/add-menu.component';
import {MenuDetailedComponent} from './menu-overview/menu-detailed/menu-detailed.component';


import {MenuGroupDetailedComponent} from './menu-overview/menu-group-detailed/menu-group-detailed.component';
import {MenuGroupDishesComponent} from './menu-overview/menu-group-detailed/menu-group-dishes/menu-group-dishes.component';
import {MenuGroupOptionsComponent} from './menu-overview/menu-group-detailed/menu-group-options/menu-group-options.component';
import {MenuGroupEditComponent} from './menu-overview/menu-group-detailed/menu-group-edit/menu-group-edit.component';





import {AddMenuGroupComponent} from './menu-overview/add-menu-group/add-menu-group.component';
import {AddMenuItemComponent} from './menu-overview/add-menu-item/add-menu-item.component';
import {BasicRestaurantDetailsComponent} from './restaurant-profile/basic-restaurant-details/basic-restaurant-details.component';
import {LoginComponent} from './login/login.component';


import {RestaurantService} from './services/restaurant/restaurant.service';
import { LogoutComponent } from './logout/logout.component'
import {Angular2TokenService} from "angular2-token";
import {RouterModule} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import {CookieService} from "angular2-cookie/services/cookies.service";
import {MenuService} from "./services/menu/menu.service";
import {AuthenticationService} from "./services/auth/authentication.service";
import { MenuGroupDishDetailComponent } from './menu-overview/menu-group-dish-detail/menu-group-dish-detail.component';
import { MenuGroupOptionDetailComponent } from './menu-overview/menu-group-option-detail/menu-group-option-detail.component';
import { AddMenuGroupOptionComponent } from './menu-overview/add-menu-group-option/add-menu-group-option.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuOverviewComponent,
    RestaurantProfileComponent,
    MainDashboardComponent,
    MenuListComponent,
    AddMenuComponent,
    MenuDetailedComponent,
    MenuGroupDetailedComponent,
    MenuGroupDishesComponent,
    MenuGroupOptionsComponent,
    MenuGroupEditComponent,
    AddMenuGroupComponent,
    AddMenuItemComponent,
    BasicRestaurantDetailsComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    MenuGroupDishDetailComponent,
    MenuGroupOptionDetailComponent,
    AddMenuGroupOptionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    CovalentCoreModule.forRoot(),
    appRoutes,
    RouterModule,
    BrowserAnimationsModule

  ],
  providers: [
    appRoutingProviders,
    RestaurantService,
    Angular2TokenService,
    CookieService,
    MenuService,
    AuthenticationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
