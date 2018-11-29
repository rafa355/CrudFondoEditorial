import { Component, OnInit} from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

import { SolicitudesService } from '../../../../../services/solicitudes.service'
import { ProyectoService } from '../../../../../services/proyecto.service'
import { Router } from '@angular/router';
import { SolicitantesService } from '../../../../../services/solicitantes.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-activacion',
  templateUrl: './activacion.component.html',
  styleUrls: ['./activacion.component.css']
})
export class ActivacionComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  constructor(private toastr:ToastrService,private spinner: NgxSpinnerService,private route: ActivatedRoute,private localeService: BsLocaleService,private _fb: FormBuilder, private router:Router,private solicitudesservice:SolicitudesService,private solicitantesservice:SolicitantesService,private proyectoservice:ProyectoService) { 
    this.minDate = new Date();
    this.maxDate = new Date();

    this.minDate.setDate(this.minDate.getDate());
  }
  public solicitud;
  public solicitantes;
  public tipos;
  id: any;

  public myForm: FormGroup;
  //propiedades para el calendario
  locale = 'es';
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.ObtenerSolicitantes();
    this.ObtenerTipos();
    this.ObtenerSolicitud();
    //Aplicar idioma español
    this.localeService.use(this.locale);
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme },{ dateInputFormat: 'YYYY-MM-DD' });
  }
  get formData():  FormGroup {return this.myForm.get('proyectos') as FormGroup; }

    initlanguage() {
      return this._fb.group({
        nombre: [''],
        autor: [this.solicitud.contacto],
        correo: [this.solicitud.correo],
        telefono: [this.solicitud.telefono],
        periodico: [''],
        proyecto_type_id: [''],
        descripcion: [''],
        tiempo_planificado_total : ['']
      });
      }

      addLanguage() {
      const control = <FormArray>this.myForm.controls['proyectos'];
      control.push(this.initlanguage());
      }

      removeLanguage(i: number) {
      const control = <FormArray>this.myForm.controls['proyectos'];
      control.removeAt(i);
      }

      save(model) {
        this.activar_solicitud(model);
      }


    ObtenerSolicitantes() {
      this.solicitantesservice.obtener_solicitantes().subscribe(
        data => { this.solicitantes = data},
        err => console.error(err),      () => console.log(this.solicitantes)
       );  }
   
       ObtenerTipos() {
        this.proyectoservice.obtener_tipos().subscribe(
          data => { this.tipos = data},
          err => console.error(err),      () => console.log(this.tipos)
         );  }
  

  activar_solicitud(solicitud) {
    this.spinner.show();
        this.solicitudesservice.activar_solicitud(solicitud,this.id).subscribe(
           data => {
            this.spinner.hide();
            this.toastr.success('Activación Realizada'); 
            this.router.navigate(['/solicitudes']);
          },
           error => {
            this.spinner.hide();
            this.toastr.error('Ha ocurrido un error'); 
           }
        );
      }

      ObtenerSolicitud() {
        this.solicitudesservice.datos_solicitud(this.id).subscribe(
          data => { this.solicitud = data;
            this.myForm = this._fb.group({
              proyectos: this._fb.array([
              this.initlanguage(),
              ])
              });
          },
          err => console.error(err),      () => console.log(this.solicitud)
         );  }

  
}
