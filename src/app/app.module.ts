import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//componente proyecto
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ListadoProyectosComponent } from './components/proyectos/listado-proyectos/listado-proyectos.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';

import { ProyectoService } from './services/proyecto.service';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SidepanelComponent } from './components/template/sidepanel/sidepanel.component';
import { MainpanelComponent } from './components/template/mainpanel/mainpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    ListadoProyectosComponent,
    ProyectoComponent,
    NavbarComponent,
    SidepanelComponent,
    MainpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
