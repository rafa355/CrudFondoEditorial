import { Component, OnInit, Input } from '@angular/core';
import { ObservacionesService } from '../../../../services/observaciones.service'

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {

  @Input('data') actividades: Object[] = [];
  page: number = 1;
  userFilter: any = { nombre: '' };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente', 
  };

constructor(private observacionesservices:ObservacionesService) { }
  
ngOnInit() {
      this.ObtenerEncargados();
    }

    ObtenerEncargados() {
      this.observacionesservices.obtener_observaciones().subscribe(
        data => { this.actividades = data},
        err => console.error(err),      () => console.log(this.actividades)
       );  }

}
