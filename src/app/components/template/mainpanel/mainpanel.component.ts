import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../../../models/proyecto'
import { EtapasProyectoComponent } from '../../../components/template/mainpanel/etapas-proyecto/etapas-proyecto.component';
import { ProyectoService } from '../../../services/proyecto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {

  public foods;
   constructor(private proyectoservice:ProyectoService) {}
   ngOnInit() {
    this.getFoods();
  }
 
  getFoods() {
   this.proyectoservice.getFoods().subscribe(
     data => { this.foods = data},
     err => console.error(err),      () => console.log(this.foods)
    );  }

}
