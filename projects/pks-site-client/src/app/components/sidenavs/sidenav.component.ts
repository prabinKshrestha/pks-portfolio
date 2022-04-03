import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pks-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    public year = new Date().getFullYear();

    private currentFragment: string | null = null;

    constructor(public route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.fragment.subscribe((fragment: string | null) => {
            this.currentFragment = fragment;
        });
    }

    isRouterLinkActive(fragment: string): string {
        if (this.currentFragment != null) {
            return fragment === this.currentFragment ? 'active' : '';
        } else {
            return fragment === 'home' ? 'active' : '';
        }
    }
}
