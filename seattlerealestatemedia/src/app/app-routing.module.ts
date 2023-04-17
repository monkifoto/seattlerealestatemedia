import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { CalculatorComponent } from './components/sections/calculator/calculator.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'estimate', component: CalculatorComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
