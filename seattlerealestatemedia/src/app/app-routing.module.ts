import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'admin', component: AdminComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
