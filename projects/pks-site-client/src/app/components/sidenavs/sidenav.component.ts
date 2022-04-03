import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pks-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    public year = new Date().getFullYear();

    constructor() { }

    ngOnInit(): void {
    }
}
