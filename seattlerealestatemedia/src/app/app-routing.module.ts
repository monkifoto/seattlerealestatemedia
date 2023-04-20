import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path: '', component: MainPageComponent},
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

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
