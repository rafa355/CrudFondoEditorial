import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../../../services/solicitudes.service'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private solicitudesservice:SolicitudesService) { }
  public solicitudes;
  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.crear_solicitud(form.value);
    }
    
  crear_solicitud(solicitud) {
        this.solicitudesservice.crear_solicitud(solicitud).subscribe(
           data => {
             return true;
           },
           error => {
             console.error("Error saving food!");
             return Observable.throw(error);
           }
        );
      }

}
