import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pks-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView();
  }

}
