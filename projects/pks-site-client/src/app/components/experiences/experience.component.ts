import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pks-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView();
  }

}
