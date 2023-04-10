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
import { TableCardComponent } from './components/table-card/table-card.component';
import { TableCardListComponent } from './components/table-card-list/table-card-list.component';
import { DynamicImageCarouselComponent } from './components/dynamic-image-carousel/dynamic-image-carousel.component';
import { EstimatorComponent } from './components/estimator/estimator.component';
import { DynamicServiceCardComponent } from './components/dynamic-service-card/dynamic-service-card.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './components/sections/reviews/reviews.component';
import { BrandsComponent } from './components/sections/brands/brands.component';

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
    CalculatorComponent,
    TableCardComponent,
    TableCardListComponent,
    DynamicImageCarouselComponent,
    EstimatorComponent,
    DynamicServiceCardComponent,
    ReviewsComponent,
    BrandsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
