import { Component, OnInit } from '@angular/core';
import { EncargadoService } from '../../../services/encargado.service'
@Component({
  selector: 'app-disenadores',
  templateUrl: './disenadores.component.html',
  styleUrls: ['./disenadores.component.css']
})
export class DisenadoresComponent implements OnInit {

  constructor(private encargadoservice:EncargadoService) { }
  public encargados;
  ngOnInit() {
    this.ObtenerEncargados();
  }
 
  ObtenerEncargados() {
   this.encargadoservice.obtener_encargados().subscribe(
     data => { this.encargados = data},
     err => console.error(err),      () => console.log(this.encargados)
    );  }
}
