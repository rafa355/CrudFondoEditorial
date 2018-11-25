import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etapas-proyecto',
  templateUrl: './etapas-proyecto.component.html',
  styleUrls: ['./etapas-proyecto.component.css']
})
export class EtapasProyectoComponent implements OnInit {

  @Input() food;
  constructor() { }

  ngOnInit() {
  }

}
