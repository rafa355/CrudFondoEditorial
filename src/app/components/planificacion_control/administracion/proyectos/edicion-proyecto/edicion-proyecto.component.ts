import { Component, OnInit,TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { ObservacionesService } from '../../../../../services/observaciones.service'

import { ProyectoService } from '../../../../../services/proyecto.service'
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-edicion-proyecto',
  templateUrl: './edicion-proyecto.component.html',
  styleUrls: ['./edicion-proyecto.component.css']
})
export class EdicionProyectoComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  constructor(private modalService: BsModalService,private observacionesservice:ObservacionesService,private toastr:ToastrService,private spinner: NgxSpinnerService,private route: ActivatedRoute,private localeService: BsLocaleService,private _fb: FormBuilder, private router:Router,private proyectoservice:ProyectoService) {
    this.minDate = new Date();
    this.maxDate = new Date();

    this.minDate.setDate(this.minDate.getDate());
   }
  public proyecto;
  public tipos;
  id: any;
  public formulario;

  public myForm: FormGroup;
  public ObservaconForm: FormGroup;

  modalRef: BsModalRef;

  //propiedades para el calendario
  locale = 'es';
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.ObtenerProyecto();
    this.ObtenerTipos();
    this.ObservaconForm = this._fb.group({
      observacion: [''],
      actualizacion: [''],
    });
    //Aplicar idioma español
    this.localeService.use(this.locale);
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme },{ dateInputFormat: 'YYYY-MM-DD' });
  }

  save(model) {
    this.editar_solicitud(this.formulario,model);
  }


     editar_solicitud(proyecto,observacion) {
      this.spinner.show();
          this.proyectoservice.editar_proyecto(proyecto,this.id).subscribe(
             data => {
              this.toastr.success('Edición Realizada');
              this.spinner.hide();
              this.crear_observacion(observacion),
              this.router.navigate(['/proyectos']);
            },
             error => {
              this.spinner.hide();
              this.toastr.error('Ha ocurrido un error'); 
             }
          );
     }
        ObtenerProyecto() {
          this.proyectoservice.obtener_proyecto(this.id).subscribe(
            data => { this.proyecto = data,
              this.myForm = this._fb.group({
                nombre: [this.proyecto.nombre],
                autor: [this.proyecto.autor],
                correo: [this.proyecto.correo],
                telefono: [this.proyecto.telefono],
                periodico: [this.proyecto.periodico],
                proyecto_type_id: [this.proyecto.proyecto_type_id],
                descripcion: [this.proyecto.descripcion],
                tiempo_planificado_total : [this.proyecto.tiempo_planificado_total],
                created_at : [this.proyecto.created_at],
                tiempo_real_total : [this.proyecto.tiempo_real_total],
                });},
            err => console.error(err),      () => console.log(this.proyecto)
           );
        }
        ObtenerTipos() {
          this.proyectoservice.obtener_tipos().subscribe(
            data => { this.tipos = data},
            err => console.error(err),      () => console.log(this.tipos)
           );  }
                     //modal para crear observacion
                     ModalObservacion(template: TemplateRef<any>,formulario) {
                      this.formulario = formulario;
                       this.modalRef = this.modalService.show(template);
                   }
                   crear_observacion(observacion){
                     this.observacionesservice.crear_observacion_proyecto(observacion,this.id).subscribe(
                       data => {
                         this.modalRef.hide();
                        },
                       error => {
                        this.toastr.error('Ha ocurrido un error'); 
                       }
                    );
                   }
}
