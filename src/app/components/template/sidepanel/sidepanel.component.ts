import { AutenticacionService } from './../../../services/autenticacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  public LogueoValido: boolean; 

  constructor(private autenticacion:AutenticacionService) { }

  ngOnInit() {
    this.autenticacion.StatusLogueo.subscribe( value => this.LogueoValido = value);
    console.log(this.LogueoValido);
  }

}
