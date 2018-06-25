import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProyectoService } from '../../services/proyecto.service';
import { Observable } from 'rxjs';
import { Proyecto } from '../../models/proyecto'

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  id: any;
  proyecto:any={id:'',nombre:'',responsable:'',descripcion:''};

  constructor(private route: ActivatedRoute,private proyectoservice: ProyectoService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.MostrarProyecto(this.id);
  }

  MostrarProyecto(id: string) {
   this.proyectoservice.obtener_proyecto(id).subscribe(
      data => { this.proyecto = data},
      err => console.error(err),      () => console.log(this.proyecto)
     ); 
   }

}
