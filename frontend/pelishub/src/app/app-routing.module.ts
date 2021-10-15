import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { Proximos } from './components/proximos/proximos.component';
import { Busqueda } from './components/busqueda/busqueda.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "proximos",
    component: Proximos
  },
  {
    path: "busqueda/:buscar",
    component: Busqueda
  },
  {
    path: "movie/:movieID",
    component: MovieComponent
  },
  {path: "**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
