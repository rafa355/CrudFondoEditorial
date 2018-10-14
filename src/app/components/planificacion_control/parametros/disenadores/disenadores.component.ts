import { Component, OnInit, Input } from '@angular/core';
import { EncargadoService } from '../../../../services/encargado.service'
@Component({
  selector: 'app-disenadores',
  templateUrl: './disenadores.component.html',
  styleUrls: ['./disenadores.component.css']
})
export class DisenadoresComponent implements OnInit {
  @Input('data') encargados: Object[] = [];
  page: number = 1;
  userFilter: any = { nombre: '' };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
};
  constructor(private encargadoservice:EncargadoService) { }
  ngOnInit() {
    this.ObtenerEncargados();
  }
 
  ObtenerEncargados() {
   this.encargadoservice.obtener_encargados().subscribe(
     data => { this.encargados = data},
     err => console.error(err),      () => console.log(this.encargados)
    );  }
}
