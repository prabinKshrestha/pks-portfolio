import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pks-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    scrollToSection(elementId: string) {
      document.getElementById(elementId)?.scrollIntoView();
    }

}
