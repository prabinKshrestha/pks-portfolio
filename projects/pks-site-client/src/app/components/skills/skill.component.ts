import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pks-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  public skills: SkillModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      new SkillModel('.NET', 90),
      new SkillModel('Python', 50),
      new SkillModel('Pandas', 80),
      new SkillModel('Angular', 40),
      new SkillModel('React', 30),
      new SkillModel('FLutter', 10),
      new SkillModel('WPF', 80),
      new SkillModel('.NET', 60),
    ]
  }

}

class SkillModel {
  public Name: string;
  public Percent: number;

  constructor(name: string, percent: number) {
    this.Name = name;
    this.Percent = percent;
  }
}
