import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../../../services/contador.service'

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  intervalId;

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#1576c2', '#ff5b5b', '#f9c851', '#10c469']
  };
  public total;
  public preliminar;
  public diagramacion;
  public publicacion;
   single = [
  ];

  view: any[] = [700, 400];

  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  gradient = true;
  constructor(private contador: ContadorService) {

    Object.assign(this, this.single);

   }

  ngOnInit() {
    this.Contadores();

  }

  addRandomValue() {
    this.single.push({"name": 'Total', "value": this.total});
    this.single.push({"name": 'Preliminar', "value": this.preliminar});
    this.single.push({"name": 'Diagramacion', "value": this.diagramacion});
    this.single.push({"name": 'Publicacion', "value": this.publicacion});
    return this.single;
  }

  Contadores() {
    this.contador.obtener_contadores().subscribe(
        data => {
          this.total = data[0]
          this.preliminar = data[1]
          this.diagramacion = data[2]
          this.publicacion = data[3]
          this.single = [...this.addRandomValue()];

        },
        err =>{ console.error(err)},() => console.log(this.preliminar )
      );
    }

}
