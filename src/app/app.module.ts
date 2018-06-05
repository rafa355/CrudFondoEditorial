import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//componente proyecto
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ListadoProyectosComponent } from './components/proyectos/listado-proyectos/listado-proyectos.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';

//servicios
import { ProyectoService } from './services/proyecto.service';

//http
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SidepanelComponent } from './components/template/sidepanel/sidepanel.component';
import { MainpanelComponent } from './components/template/mainpanel/mainpanel.component';
import { EtapasProyectoComponent } from './components/template/mainpanel/etapas-proyecto/etapas-proyecto.component';

//para rutas
import { AppRoutingModule } from './routes/app-routing/app-routing.module';
import { DisenadoresComponent } from './components/disenadores/disenadores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    ListadoProyectosComponent,
    ProyectoComponent,
    NavbarComponent,
    SidepanelComponent,
    MainpanelComponent,
    DisenadoresComponent,
    EtapasProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,

  ],
  providers: [ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
