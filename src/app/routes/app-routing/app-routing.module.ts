import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpanelComponent } from './../../components/template/mainpanel/mainpanel.component';
import { ProyectosComponent } from './../../components/administracion/proyectos/proyectos.component';
import { DisenadoresComponent } from './../../components/administracion/disenadores/disenadores.component'
import { SolicitudesComponent } from './../../components/administracion/solicitudes/solicitudes.component'
import { RegistroComponent } from './../../components/administracion/solicitudes/registro/registro.component'
import { SeguimientoComponent } from './../../components/seguimiento/seguimiento.component'

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: MainpanelComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'diseñadores', component: DisenadoresComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'registro_solicitud', component: RegistroComponent },
  { path: 'seguimiento/:id', component: SeguimientoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
