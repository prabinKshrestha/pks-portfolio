import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/abouts/about.component';
import { EducationComponent } from './components/educations/education.component';
import { ExperienceComponent } from './components/experiences/experience.component';
import { ExtraActivityComponent } from './components/extra-activities/extra-activity.component';
import { SidenavComponent } from './components/sidenavs/sidenav.component';
import { SkillComponent } from './components/skills/skill.component';
import { WelcomeComponent } from './components/welcomes/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        WelcomeComponent,
        AboutComponent,
        EducationComponent,
        SkillComponent,
        ExperienceComponent,
        ExtraActivityComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
