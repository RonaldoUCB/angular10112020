import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
