import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { EtapasService } from '../../../../services/etapas.service';
import { Observable } from 'rxjs';
import { Etapas } from '../../../../models/etapas'

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {

  constructor(private route: ActivatedRoute,private etapasservice: EtapasService) {}
  id: any;
  etapa:any={estado:'',transcurrido:'',estimado:''};
  public adjuntos;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.MostrarEtapa('3',this.id);
  }
 
    MostrarEtapa(etapa:string,id: string) {
      this.etapasservice.obtener_etapa_y_adjuntos(etapa,id).subscribe(
            data => {
              this.etapa = data[0]
              this.adjuntos = data[1]
            }
          );
        }

}
