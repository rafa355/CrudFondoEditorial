import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

//componentes de administracion
import { ProyectosComponent } from './components/planificacion_control/administracion/proyectos/proyectos.component';
import { DisenadoresComponent } from './components/planificacion_control/administracion/disenadores/disenadores.component';

//servicios
import { ProyectoService } from './services/proyecto.service';
import { EncargadoService } from './services/encargado.service';
import { EtapasService } from './services/etapas.service';
import { SolicitudesService } from './services/solicitudes.service';
import { SolicitantesService } from './services/solicitantes.service';
import { AdjuntoService } from './services/adjunto.service';

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
import { PreliminarComponent } from './components/planificacion_control/seguimiento/preliminar/preliminar.component';
import { DiagramacionComponent } from './components/planificacion_control/seguimiento/diagramacion/diagramacion.component';
import { RevisionComponent } from './components/planificacion_control/seguimiento/revision/revision.component';
import { PublicacionComponent } from './components/planificacion_control/seguimiento/publicacion/publicacion.component';
import { SolicitudesComponent } from './components/planificacion_control/administracion/solicitudes/solicitudes.component';
import { RegistroComponent } from './components/planificacion_control/administracion/solicitudes/registro/registro.component';
import { ActivacionComponent } from './components/planificacion_control/administracion/solicitudes/activacion/activacion.component';
import { RegistroDisenadoresComponent } from './components/planificacion_control/administracion/disenadores/registro-disenadores/registro-disenadores.component';

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
    PreliminarComponent,
    DiagramacionComponent,
    RevisionComponent,
    PublicacionComponent,
    SolicitudesComponent,
    RegistroComponent,
    ActivacionComponent,
    RegistroDisenadoresComponent,
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
    ModalModule.forRoot()
  ],
  providers: [ProyectoService,EncargadoService,EtapasService,SolicitudesService,SolicitantesService,AdjuntoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
