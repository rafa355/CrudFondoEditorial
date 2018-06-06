import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpanelComponent } from './../../components/template/mainpanel/mainpanel.component';
import { ProyectosComponent } from './../../components/proyectos/proyectos.component';
import { DisenadoresComponent } from './../../components/disenadores/disenadores.component'
import { SeguimientoComponent } from './../../components/seguimiento/seguimiento.component'

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: MainpanelComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'diseñadores', component: DisenadoresComponent },
  { path: 'seguimiento/:id', component: SeguimientoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
