import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent  {

    constructor() {
    }

    routes: Object[] = [{
        title: 'MainDashboardComponent',
        route: '/',
    }, {
        title: 'MenuOverviewComponent',
        route: '/menu',
    }, {
        title: 'RestaurantProfileComponent',
        route: '/profile',
    }
    ];

}
