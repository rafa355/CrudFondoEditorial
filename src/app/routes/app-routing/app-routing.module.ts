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
import { IncioSesionComponent } from 'src/app/components/planificacion_control/incio-sesion/incio-sesion.component';
import { LogueadoService } from 'src/app/services/logueado.service';
import { NologueadoService } from 'src/app/services/nologueado.service';

const routes: Routes = [
  { path: '', redirectTo: '/inicio_sesion', pathMatch: 'full' },
  { path: 'inicio_sesion', component: IncioSesionComponent, canActivate: [NologueadoService] },
  { path: 'inicio', component: MainpanelComponent,canActivate: [LogueadoService]  },
  { path: 'proyectos', component: ProyectosComponent,canActivate: [LogueadoService] },
  { path: 'editar_proyecto/:id', component: EdicionProyectoComponent,canActivate: [LogueadoService] },
  { path: 'diseñadores', component: DisenadoresComponent,canActivate: [LogueadoService] },
  { path: 'registro_disenador', component: RegistroDisenadoresComponent,canActivate: [LogueadoService] },
  { path: 'solicitudes', component: SolicitudesComponent,canActivate: [LogueadoService] },
  { path: 'registro_solicitud', component: RegistroComponent,canActivate: [LogueadoService] },
  { path: 'activar_solicitud/:id', component: ActivacionComponent,canActivate: [LogueadoService] },
  { path: 'editar_solicitud/:id', component: EdicionComponent,canActivate: [LogueadoService] },
  { path: 'seguimiento/:id', component: SeguimientoComponent ,canActivate: [LogueadoService]},
  { path: 'estadisticas', component: EstadisticasComponent ,canActivate: [LogueadoService]},
  { path: 'proyecciones', component: ProyeccionesComponent,canActivate: [LogueadoService] },
  { path: 'proyecciones_proyecto', component: ProyeccionesProyectoComponent,canActivate: [LogueadoService] },
  { path: 'solicitantes', component: SolicitantesComponent ,canActivate: [LogueadoService]},
  { path: 'tipo_proyecto', component: TipoProyectoComponent,canActivate: [LogueadoService] },
  { path: 'registro_solicitante', component: RegistroSolicitanteComponent,canActivate: [LogueadoService] },
  { path: 'registro_tipo_proyecto', component: RegistroTipoProyectoComponent ,canActivate: [LogueadoService]},
  { path: 'reportes', component: ReportesComponent ,canActivate: [LogueadoService]},
  { path: 'historial', component: HistorialComponent ,canActivate: [LogueadoService]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
