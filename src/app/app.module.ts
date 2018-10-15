import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule,registerLocaleData  } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalModule,AccordionModule,BsDatepickerModule   } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import localeEs from '@angular/common/locales/es';

defineLocale('es', esLocale);
registerLocaleData(localeEs);

import { esLocale } from 'ngx-bootstrap/locale';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

//componentes de administracion
import { ProyectosComponent } from './components/planificacion_control/administracion/proyectos/proyectos.component';
import { DisenadoresComponent } from './components/planificacion_control/parametros/disenadores/disenadores.component';

//servicios
import { ProyectoService } from './services/proyecto.service';
import { EncargadoService } from './services/encargado.service';
import { EtapasService } from './services/etapas.service';
import { SolicitudesService } from './services/solicitudes.service';
import { SolicitantesService } from './services/solicitantes.service';
import { AdjuntoService } from './services/adjunto.service';
import { CargararchivoService } from './services/cargararchivo.service';
import { ContadorService } from './services/contador.service';
import { ProyeccionesService } from './services/proyecciones.service';
//http
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SidepanelComponent } from './components/template/sidepanel/sidepanel.component';
import { MainpanelComponent } from './components/template/mainpanel/mainpanel.component';
import { EtapasProyectoComponent } from './components/template/mainpanel/etapas-proyecto/etapas-proyecto.component';

//para rutas
import { AppRoutingModule } from './routes/app-routing/app-routing.module';
import { SeguimientoComponent } from './components/planificacion_control/seguimiento/seguimiento.component';
import { SolicitudesComponent } from './components/planificacion_control/administracion/solicitudes/solicitudes.component';
import { RegistroComponent } from './components/planificacion_control/administracion/solicitudes/registro/registro.component';
import { ActivacionComponent } from './components/planificacion_control/administracion/solicitudes/activacion/activacion.component';
import { RegistroDisenadoresComponent } from './components/planificacion_control/parametros/disenadores/registro-disenadores/registro-disenadores.component';
import { GlobalComponent } from './components/planificacion_control/global/global.component';
import { EtapasComponent } from './components/planificacion_control/seguimiento/etapas/etapas.component';
import { EstadisticasComponent } from './components/planificacion_control/estadisticas/estadisticas.component';
import { ProyeccionesComponent } from './components/planificacion_control/proyecciones/proyecciones.component';
import { SolicitantesComponent } from './components/planificacion_control/parametros/solicitantes/solicitantes.component';
import { RegistroSolicitanteComponent } from './components/planificacion_control/parametros/solicitantes/registro-solicitante/registro-solicitante.component';
import { TipoProyectoComponent } from './components/planificacion_control/parametros/tipo-proyecto/tipo-proyecto.component';
import { RegistroTipoProyectoComponent } from './components/planificacion_control/parametros/tipo-proyecto/registro-tipo-proyecto/registro-tipo-proyecto.component';
import { ProyeccionesProyectoComponent } from './components/planificacion_control/proyecciones/proyecciones-proyecto/proyecciones-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    NavbarComponent,
    SidepanelComponent,
    MainpanelComponent,
    DisenadoresComponent,
    EtapasProyectoComponent,
    SeguimientoComponent,
    SolicitudesComponent,
    RegistroComponent,
    ActivacionComponent,
    RegistroDisenadoresComponent,
    GlobalComponent,
    EtapasComponent,
    EstadisticasComponent,
    ProyeccionesComponent,
    SolicitantesComponent,
    RegistroSolicitanteComponent,
    TipoProyectoComponent,
    RegistroTipoProyectoComponent,
    ProyeccionesProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    NgxChartsModule,
    NgxSpinnerModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxPaginationModule,
    FilterPipeModule,

  ],
  providers: [ProyeccionesService,ContadorService,CargararchivoService,GlobalComponent,ProyectoService,EncargadoService,EtapasService,SolicitudesService,SolicitantesService,AdjuntoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
