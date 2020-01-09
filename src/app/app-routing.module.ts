import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SigninComponent } from './signin/signin.component';
import { CarComponent } from './car/car.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: SigninComponent},
  {path: 'catalogue', component: CatalogComponent},
  { path: 'car', component: CarComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
