import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/abouts/about.component';
import { SidenavComponent } from './components/sidenavs/sidenav.component';
import { WelcomeComponent } from './components/welcomes/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        WelcomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
