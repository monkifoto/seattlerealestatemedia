import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { CalculatorComponent } from './components/sections/calculator/calculator.component';
import { PhotographyComponent } from './components/portfolio/photography/photography.component';
import { VideoComponent } from './components/sections/video/video.component';
import { AerialComponent } from './components/sections//aerial/aerial.component';
import { ThreedimentionComponent } from './components/portfolio/threedimention/threedimention.component';
import { FloorplanComponent } from './components/sections//floorplan/floorplan.component';
import { VirtualstagingComponent } from './components/portfolio/virtualstaging/virtualstaging.component';
import { HeadshotsComponent } from './components/portfolio/headshots/headshots.component';
import { BrandingComponent } from './components/portfolio/branding/branding.component';
import { WebsitesComponent } from './components/portfolio/websites/websites.component';
import { StagingComponent } from './components/sections/staging/staging.component';
import { AirBnBComponent } from './components/portfolio/air-bn-b/air-bn-b.component';
import { PropertyManagmentComponent } from './components/portfolio/property-managment/property-managment.component';
import { RentalComponent } from './components/portfolio/rental/rental.component';
import { GalleryComponent } from './components/gallery/gallery/gallery.component';
import { ImageDetailComponent } from './components/gallery/image-detail/image-detail.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/gallery/upload/upload.component';
// import { AuthenticationGuard} from '../app/data/services/authentication.service'
import { PolicyComponent } from './components/policy/policy.component';
import { TOSComponent } from './components/tos/tos.component';
import { DownloadInstructionsComponent } from './components/download-instructions/download-instructions.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'estimate', component: CalculatorComponent},
  {path: 'photography', component: PhotographyComponent},
  {path: 'video', component: VideoComponent},
  {path: 'aerial', component: AerialComponent},
  {path: '3d', component: ThreedimentionComponent},
  {path: 'floorplan', component: FloorplanComponent},
  {path: 'staging', component: StagingComponent},
  {path: 'headshots', component: HeadshotsComponent},
  {path: 'branding', component: BrandingComponent},
  {path: 'websites', component: WebsitesComponent},
  {path: 'airBnB', component:AirBnBComponent},
  {path: 'landlord', component: RentalComponent},
  {path: 'propertymanagment', component: PropertyManagmentComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'image/:id', component: ImageDetailComponent},
  {path: 'upload', component: UploadComponent},
  // {path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard]},
  // {path: 'login', component: LoginComponent },
  // {path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]},
  // {path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]}
  {path: 'propertymanagment', component: PropertyManagmentComponent},
  {path: 'policy',component: PolicyComponent},
  {path: 'tos', component: TOSComponent},
  {path: 'instructions', component: DownloadInstructionsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
