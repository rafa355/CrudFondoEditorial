import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

//componentes de administracion
import { ProyectosComponent } from './components/administracion/proyectos/proyectos.component';
import { DisenadoresComponent } from './components/administracion/disenadores/disenadores.component';

//servicios
import { ProyectoService } from './services/proyecto.service';
import { EncargadoService } from './services/encargado.service';
import { EtapasService } from './services/etapas.service';
import { SolicitudesService } from './services/solicitudes.service';
import { SolicitantesService } from './services/solicitantes.service';

//http
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SidepanelComponent } from './components/template/sidepanel/sidepanel.component';
import { MainpanelComponent } from './components/template/mainpanel/mainpanel.component';
import { EtapasProyectoComponent } from './components/template/mainpanel/etapas-proyecto/etapas-proyecto.component';

//para rutas
import { AppRoutingModule } from './routes/app-routing/app-routing.module';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { PreliminarComponent } from './components/seguimiento/preliminar/preliminar.component';
import { DiagramacionComponent } from './components/seguimiento/diagramacion/diagramacion.component';
import { RevisionComponent } from './components/seguimiento/revision/revision.component';
import { PublicacionComponent } from './components/seguimiento/publicacion/publicacion.component';
import { SolicitudesComponent } from './components/administracion/solicitudes/solicitudes.component';
import { RegistroComponent } from './components/administracion/solicitudes/registro/registro.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule ,    
    ReactiveFormsModule,

  ],
  providers: [ProyectoService,EncargadoService,EtapasService,SolicitudesService,SolicitantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
