import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../../../models/proyecto'
import { EtapasProyectoComponent } from '../../../components/template/mainpanel/etapas-proyecto/etapas-proyecto.component';
import { ProyectoService } from '../../../services/proyecto.service';
@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {

  proyectos: Proyecto[] =[];

  constructor(private proyectoservice:ProyectoService) { }

  ngOnInit() {
    this.proyectos = this.proyectoservice.ObtenerProyectos();
  }

}
