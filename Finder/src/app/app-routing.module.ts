import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CardsComponent} from "./cards/cards.component";
import {FormationsComponent} from "./formations/formations.component";
import {SchoolsComponent} from "./schools/schools.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'schools', component: SchoolsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
