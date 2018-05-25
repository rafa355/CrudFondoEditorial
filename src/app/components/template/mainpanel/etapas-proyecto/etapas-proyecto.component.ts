import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../../../../models/proyecto';

@Component({
  selector: 'app-etapas-proyecto',
  templateUrl: './etapas-proyecto.component.html',
  styleUrls: ['./etapas-proyecto.component.css']
})
export class EtapasProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;
  constructor() { }

  ngOnInit() {
  }

}
