import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ReportesService } from '../../../services/reportes.service';
import { Http, ResponseContentType } from '@angular/http';
import { GlobalComponent } from '../global/global.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {

  constructor(private toastr:ToastrService,private spinner: NgxSpinnerService,private GlobalComponent:GlobalComponent,private http: Http,private reportesservices:ReportesService,private localeService: BsLocaleService,private _fb: FormBuilder) { }

  public solicitudes_gen: FormGroup;
  public solicitudes_est: FormGroup;
  public solicitudes_proyectos_gen: FormGroup;
  public solicitudes_proyectos_est: FormGroup;
  public proyectos_gen: FormGroup;
  public proyectos_est: FormGroup;
  public proyectos2_gen: FormGroup;
  public proyectos2_est: FormGroup;
  public proyectos3_gen: FormGroup;
  public proyectos3_est: FormGroup;
  public proyectos_listos: FormGroup;
  public actividades: FormGroup;
  public mejoras: FormGroup;
  //propiedades para el calendario
  locale = 'es';
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {
        //Aplicar idioma español
        this.localeService.use(this.locale);
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme },{ dateInputFormat: 'YYYY-MM-DD' });
        //para reportes de solicitudes
        this.solicitudes_gen = this._fb.group({rango: [''],});
        this.solicitudes_est = this._fb.group({rango: [''],});
        this.solicitudes_proyectos_gen = this._fb.group({rango: [''],});
        this.solicitudes_proyectos_est = this._fb.group({rango: [''],});
        //para reporte de proyectos
        this.proyectos_gen = this._fb.group({rango: [''],});
        this.proyectos_est = this._fb.group({rango: [''],});
        this.proyectos2_gen = this._fb.group({rango: [''],});
        this.proyectos2_est = this._fb.group({rango: [''],});
        this.proyectos3_gen = this._fb.group({rango: [''],});
        this.proyectos3_est = this._fb.group({rango: [''],});
        this.proyectos_listos = this._fb.group({rango: [''],});
        this.actividades = this._fb.group({rango: [''],});
        this.mejoras = this._fb.group({rango: [''],});
      }
          save(model,tipo) {
            this.generar_reporte(model,tipo);
          }

          generar_reporte(rango,tipo) {
            this.spinner.show();
            this.reportesservices.generar_reporte(rango,tipo).subscribe(
               data => {
                this.spinner.hide();
                 console.log('generado');
                 this.downloadFile(data,tipo)
              },
               error => {
                this.spinner.hide();
                this.toastr.error('Ha ocurrido un error');               }
            );
          }

          downloadFile(url,tipo) {
            this.reportesservices.getPDF(url)
            .subscribe(x => {

                var newBlob = new Blob([x], { type: "application/pdf" });
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(newBlob);
                    return;
                }

                const data = window.URL.createObjectURL(newBlob);

                var link = document.createElement('a');
                link.href = data;
                if(tipo == 'solicitudes_gen'){link.download = "reporte_solicitudes.pdf";}
                if(tipo == 'solicitudes_est'){link.download = "reporte_solicitudes_estado.pdf";}
                if(tipo == 'solicitudes_proyectos_gen'){link.download = "reporte_solicitudes_proyectos.pdf";}
                if(tipo == 'solicitudes_proyectos_est'){link.download = "reporte_solicitudes_proyectos_estado.pdf";}
                if(tipo == 'proyectos_gen'){link.download = "reporte_general_proyectos.pdf";}
                if(tipo == 'proyectos_est'){link.download = "reporte_proyectos_estado.pdf";}
                if(tipo == 'proyectos2_gen'){link.download = "reporte_general_proyectos_2.pdf";}
                if(tipo == 'proyectos2_est'){link.download = "reporte_proyectos_estado_2.pdf";}
                if(tipo == 'proyectos3_gen'){link.download = "reporte_general_proyectos_3.pdf";}
                if(tipo == 'proyectos3_est'){link.download = "reporte_proyectos_estado_3.pdf";}
                if(tipo == 'proyectos_listos'){link.download = "reporte_proyectos_listos.pdf";}
                if(tipo == 'actividades'){link.download = "reporte_actividades.pdf";}
                if(tipo == 'mejoras'){link.download = "reporte_mejoras.pdf";}
                link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

                setTimeout(function () {

                  window.URL.revokeObjectURL(data);
                }, 100);
            });

          }

  }


