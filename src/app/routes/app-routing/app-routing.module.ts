import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpanelComponent } from './../../components/template/mainpanel/mainpanel.component';
import { ProyectosComponent } from './../../components/planificacion_control/administracion/proyectos/proyectos.component';
import { DisenadoresComponent } from './../../components/planificacion_control/administracion/disenadores/disenadores.component'
import { SolicitudesComponent } from './../../components/planificacion_control/administracion/solicitudes/solicitudes.component'
import { RegistroComponent } from './../../components/planificacion_control/administracion/solicitudes/registro/registro.component'
import { ActivacionComponent } from './../../components/planificacion_control/administracion/solicitudes/activacion/activacion.component'
import { SeguimientoComponent } from './../../components/planificacion_control/seguimiento/seguimiento.component'

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: MainpanelComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'diseñadores', component: DisenadoresComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'registro_solicitud', component: RegistroComponent },
  { path: 'activar_solicitud/:id', component: ActivacionComponent },
  { path: 'seguimiento/:id', component: SeguimientoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
