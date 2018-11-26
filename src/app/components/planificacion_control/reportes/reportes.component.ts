import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ReportesService } from '../../../services/reportes.service';
import { Http, ResponseContentType } from '@angular/http';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {

  constructor(private GlobalComponent:GlobalComponent,private http: Http,private reportesservices:ReportesService,private localeService: BsLocaleService,private _fb: FormBuilder) { }

  public myForm: FormGroup;
  public solicitudes_2: FormGroup;

  //propiedades para el calendario
  locale = 'es';
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {
        //Aplicar idioma español
        this.localeService.use(this.locale);
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme },{ dateInputFormat: 'YYYY-MM-DD' });

        this.myForm = this._fb.group({
          rango: [''],
          });
          this.solicitudes_2 = this._fb.group({
            rango: [''],
            });
        }
          save(model,tipo) {
            this.generar_reporte(model,tipo);
          }

          generar_reporte(rango,tipo) {
            this.reportesservices.generar_reporte(rango,tipo).subscribe(
               data => {
                 console.log('generado');
                 this.downloadFile(data,tipo)
              },
               error => {
                 console.error("Error saving food!");
               }
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
                if(tipo == 'general'){
                  link.download = "reporte_general_solicitudes.pdf";
                }
                if(tipo == 'solicitudes'){
                  link.download = "reporte_general_solicitudes_proyectos.pdf";
                }
                link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

                setTimeout(function () {

                  window.URL.revokeObjectURL(data);
                }, 100);
            });

          }

  }


