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

        }
          save(model,tipo) {
            this.generar_reporte(model,tipo);
          }

          generar_reporte(rango,tipo) {
            this.reportesservices.generar_reporte(rango,tipo).subscribe(
               data => {
                 console.log('generado');
                 this.downloadFile(data)
              },
               error => {
                 console.error("Error saving food!");
               }
            );
          }

          downloadFile(url) {
            return this.http
              .get(this.GlobalComponent.url+'ImprimReporte/'+url, {
                responseType: ResponseContentType.Blob,
              })
              .map(res => {
                return {
                  filename: 'reporte_general.pdf',
                  data: res.blob()
                };
              })
              .subscribe(res => {
                  console.log('start download:',res);
                  var url = window.URL.createObjectURL(res.data);
                  var a = document.createElement('a');
                  document.body.appendChild(a);
                  a.setAttribute('style', 'display: none');
                  a.href = url;
                  a.download = res.filename;
                  a.click();
                  window.URL.revokeObjectURL(url);
                  a.remove(); // remove the element
                }, error => {
                  console.log('download error:', JSON.stringify(error));
                }, () => {
                  console.log('Completed file download.')
                });
          }
          
  }


