import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpanelComponent } from './../../components/template/mainpanel/mainpanel.component';
import { ProyectosComponent } from './../../components/planificacion_control/administracion/proyectos/proyectos.component';
import { SolicitantesComponent } from './../../components/planificacion_control/parametros/solicitantes/solicitantes.component';
import { TipoProyectoComponent } from './../../components/planificacion_control/parametros/tipo-proyecto/tipo-proyecto.component';
import { RegistroSolicitanteComponent } from './../../components/planificacion_control/parametros/solicitantes/registro-solicitante/registro-solicitante.component';
import { DisenadoresComponent } from './../../components/planificacion_control/parametros/disenadores/disenadores.component'
import { SolicitudesComponent } from './../../components/planificacion_control/administracion/solicitudes/solicitudes.component'
import { RegistroComponent } from './../../components/planificacion_control/administracion/solicitudes/registro/registro.component'
import { ActivacionComponent } from './../../components/planificacion_control/administracion/solicitudes/activacion/activacion.component'
import { SeguimientoComponent } from './../../components/planificacion_control/seguimiento/seguimiento.component'
import { RegistroDisenadoresComponent } from './../../components/planificacion_control/parametros/disenadores/registro-disenadores/registro-disenadores.component'
import { EstadisticasComponent } from './../../components/planificacion_control/estadisticas/estadisticas.component'
import { ProyeccionesComponent } from './../../components/planificacion_control/proyecciones/proyecciones.component'
import { RegistroTipoProyectoComponent } from './../../components/planificacion_control/parametros/tipo-proyecto/registro-tipo-proyecto/registro-tipo-proyecto.component';
import { ProyeccionesProyectoComponent } from './../../components/planificacion_control/proyecciones/proyecciones-proyecto/proyecciones-proyecto.component';
import { ReportesComponent } from './../../components/planificacion_control/reportes/reportes.component';
import { EdicionComponent } from './../../components/planificacion_control/administracion/solicitudes/edicion/edicion.component';
import { HistorialComponent } from './../../components/planificacion_control/reportes/historial/historial.component';
import { EdicionProyectoComponent } from './../../components/planificacion_control/administracion/proyectos/edicion-proyecto/edicion-proyecto.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: MainpanelComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'editar_proyecto/:id', component: EdicionProyectoComponent },
  { path: 'diseñadores', component: DisenadoresComponent },
  { path: 'registro_disenador', component: RegistroDisenadoresComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'registro_solicitud', component: RegistroComponent },
  { path: 'activar_solicitud/:id', component: ActivacionComponent },
  { path: 'editar_solicitud/:id', component: EdicionComponent },
  { path: 'seguimiento/:id', component: SeguimientoComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'proyecciones', component: ProyeccionesComponent },
  { path: 'proyecciones_proyecto', component: ProyeccionesProyectoComponent },
  { path: 'solicitantes', component: SolicitantesComponent },
  { path: 'tipo_proyecto', component: TipoProyectoComponent },
  { path: 'registro_solicitante', component: RegistroSolicitanteComponent },
  { path: 'registro_tipo_proyecto', component: RegistroTipoProyectoComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'historial', component: HistorialComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
