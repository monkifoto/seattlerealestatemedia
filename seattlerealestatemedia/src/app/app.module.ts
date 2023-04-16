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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    BrandsComponent,
    BookingListComponent,
    MainPageComponent,
    AdminComponent,
    ModalComponent,
    ModalContentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
