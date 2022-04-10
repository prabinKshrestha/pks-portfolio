import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isSideNavOpen: boolean = false;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      this.isSideNavOpen = false;
    });
  }

  public toggleSidenav(value: boolean = false) {
    if (value) {
      this.isSideNavOpen = false;
    } else {
      this.isSideNavOpen = !this.isSideNavOpen;
    }
  }
}
