import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './../../../services/autenticacion.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public LogueoValido: boolean; 

  constructor(private spinner: NgxSpinnerService,private router:Router,private autenticacion:AutenticacionService) { }

  ngOnInit() {
    this.autenticacion.StatusLogueo.subscribe( value => this.LogueoValido = value);
    console.log(this.LogueoValido);
  }

  cerrar_sesion(event: MouseEvent) {
    event.preventDefault();
    this.spinner.show();
    this.autenticacion.cambiar_status_logueo(false);
    this.autenticacion.remover_token();
    this.router.navigate(['/']);
    this.spinner.hide();
   }

}
