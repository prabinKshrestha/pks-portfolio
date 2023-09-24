import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pks-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

    public skills: SkillModel[] = [];
    public skillCategories: SkillCategoryModel[] = [];

    constructor() { }

    ngOnInit(): void {
        this.skillCategories = [
            new SkillCategoryModel('Programming', [
                ['C#', '.NET - Web API, MVC, Razor', 'Entity Framework', 'C++', 'C',],
                ['JavaScript', 'TypeScript', 'Angular, Angular Material', 'React', 'jQuery, AJAX'],
                ['Python', 'Pandas, NumPy', 'Matplotlib, Seaborn', 'Fast API'],
                ['PHP', 'Laravel'],
                // ['Python', 'Pandas, NumPy', 'R'],
                // ['Dart', 'Flutter'],
                ['HTML', 'CSS/SCSS', 'Tailwind CSS'],
                ['CI-CD'],
            ]),
            new SkillCategoryModel('Database', [
                ['SQL Server/MSSQL', 'MySQL', 'PostgreSQL'],
                ['MongoDB', 'Redis Cache']
            ]),
            new SkillCategoryModel('Cloud Services', [
                ['Rackspace'],
                ['Azure Services', 'Azure Queue', 'Azure Blob Storage', 'Azure Cache for Redis', 'Azure Functions', 'Azure DevOps']
            ]),
            new SkillCategoryModel('Software', [
                ['Visual Studio', 'VS Code', 'Jet Brains IDE'],
                // ['Visual Studio', 'VS Code', 'Jet Brains IDE', 'Android Studio'],
                ['SSMS', 'Azure Data Studio', 'Robo 3T'],
                // ['Jupyter', 'R Studio'],
                ['Jupyter'],
                ['Postman'],
                ['GIT', 'TFS']
            ]),
            new SkillCategoryModel('Soft Skills', [
                ['Good Communication', 'Time Management',],
                ['Problem Solving', 'Adaptability and Flexibility', 'Decision Making'],
                ['Analysis', 'Research', 'Creative']
            ]),
        ];
        this.skills = [
            new SkillModel('C#', 90),
            new SkillModel('.NET', 90),
            new SkillModel('Entity Framework', 85),
            new SkillModel('SQL', 80),
            new SkillModel('Javascript', 80),
            new SkillModel('Angular', 80),
            new SkillModel('Angular Material', 80),
            new SkillModel('React', 30),
            new SkillModel('jQuery', 75),
            new SkillModel('Python', 80),
            new SkillModel('Pandas/NumPy', 40),
            new SkillModel('Matplotlib/Seaborn', 40),
            new SkillModel('Azure', 60),
            // new SkillModel('Dart', 40),
            // new SkillModel('Flutter', 40),
            new SkillModel('PHP', 70),
            new SkillModel('Laravel', 60),
            new SkillModel('Communication', 90),
            new SkillModel('Problem Solving', 75),
            new SkillModel('Decision Solving', 70),
            new SkillModel('Research', 80),
        ]
    }

}

class SkillCategoryModel {
    public Name: string;
    public Skills: string[][];

    constructor(name: string, skills: string[][]) {
        this.Name = name;
        this.Skills = skills;
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
