import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../../../models/proyecto'
import { EtapasProyectoComponent } from '../../../components/template/mainpanel/etapas-proyecto/etapas-proyecto.component';
import { ProyectoService } from '../../../services/proyecto.service';
import { ContadorService } from '../../../services/contador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {

  public proyectos;
  public total;
  public preliminar;
  public diagramacion;
  public publicacion;
   constructor(private contadorservice:ContadorService,private proyectoservice:ProyectoService) {}
   ngOnInit() {
    this.obtener_proyectos();
    this.Contadores();
  }
 
        obtener_proyectos() {
        this.proyectoservice.obtener_proyectos().subscribe(
          data => { this.proyectos = data},
          err => console.error(err),      () => console.log(this.proyectos)
          );  }

        //Metodo para contar 
Contadores() {
          this.contadorservice.obtener_contadores_principal().subscribe(
              data => {
                this.total = data
              },
              err =>{ console.error(err)}
            );
          }

}
