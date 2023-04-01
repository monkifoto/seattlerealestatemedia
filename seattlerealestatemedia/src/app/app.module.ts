import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/nav-bar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { PhotoComponent } from './components/sections/photo/photo.component';
import { VideoComponent } from './components/sections/video/video.component';
import { Tour3dComponent } from './components/sections/tour3d/tour3d.component';
import { FloorplanComponent } from './components/sections/floorplan/floorplan.component';
import { StagingComponent } from './components/sections/staging/staging.component';
import { HeadshotsComponent } from './components/sections/headshots/headshots.component';
import { AerialComponent } from './components/sections/aerial/aerial.component';
import { CalculatorComponent } from './components/sections/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    PhotoComponent,
    VideoComponent,
    Tour3dComponent,
    FloorplanComponent,
    StagingComponent,
    HeadshotsComponent,
    AerialComponent,
    CalculatorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
