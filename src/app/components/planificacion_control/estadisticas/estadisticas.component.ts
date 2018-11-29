import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../../../services/contador.service'
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  intervalId;
  // opcions para graficas
  showLegend = false;
  view: any[] = [400, 400];
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  gradient = true;

  public periodo_graficas: FormGroup;

  public solicitudes_estado;
  public solicitudes_tipo;
  public solicitudes_usuario_cliente;
  public proyectos_usuario_cliente;
  public proyectos_generales;


  grafica_solicitudes_usuario_cliente = [];
  grafica_solicitudes_cliente = [];
  grafica_solicitudes_usuario= [];
  grafica_solicitudes_estado= [];
  grafica_solicitudes_tipo= [];
  grafica_proyectos_usuario_cliente = [];
  grafica_proyectos_cliente = [];
  grafica_proyectos_usuario = [];
  grafica_proyectos_estado = [];
  grafica_proyectos_tipo = [];
  grafica_proyectos_autor= [];
  grafica_proyectos_disenador= [];

  constructor(private toastr:ToastrService,private spinner: NgxSpinnerService,private _fb: FormBuilder,private contador: ContadorService) {
    Object.assign(this, this.grafica_solicitudes_usuario_cliente);
    Object.assign(this, this.grafica_solicitudes_cliente);
    Object.assign(this, this.grafica_solicitudes_usuario);
    Object.assign(this, this.grafica_solicitudes_estado);
    Object.assign(this, this.grafica_solicitudes_tipo);
    Object.assign(this, this.grafica_proyectos_usuario_cliente);
    Object.assign(this, this.grafica_proyectos_cliente);
    Object.assign(this, this.grafica_proyectos_usuario);
    Object.assign(this, this.grafica_proyectos_estado);
    Object.assign(this, this.grafica_proyectos_tipo);
    Object.assign(this, this.grafica_proyectos_autor);
    Object.assign(this, this.grafica_proyectos_disenador);
   }

  ngOnInit() {
    this.periodo_graficas = this._fb.group({rango: [''],});
  }

  save(model) {
    this.mostrar_graficas(model);
  }

  agregar_datos_solicitudes_clientes_usuario(datos) {
    for (var datos of datos) {
      this.grafica_solicitudes_usuario_cliente.push({"name": datos.nombre, "value": datos.solicitudes_count});
    }
    return this.grafica_solicitudes_usuario_cliente;
  }
  agregar_datos_solicitudes_usuarios(datos) {
    for (var datos of datos) {
      this.grafica_solicitudes_usuario.push({"name": datos.nombre, "value": datos.solicitudes_count});
    }
    return this.grafica_solicitudes_usuario;
  }
  agregar_datos_solicitudes_clientes(datos) {
    for (var datos of datos) {
      this.grafica_solicitudes_cliente.push({"name": datos.nombre, "value": datos.solicitudes_count});
    }
    return this.grafica_solicitudes_cliente;
  }
  agregar_datos_solicitudes_estados(datos) {
      this.grafica_solicitudes_estado.push({"name": 'Activas' ,"value": datos.activas});
      this.grafica_solicitudes_estado.push({"name": 'Anuladas', "value": datos.anuladas});
      this.grafica_solicitudes_estado.push({"name": 'Pendientes', "value": datos.pendientes});

    return this.grafica_solicitudes_estado;
  }
  agregar_datos_solicitudes_tipos(datos) {
    this.grafica_solicitudes_tipo.push({"name": 'Publicación' ,"value": datos.publicacion});
    this.grafica_solicitudes_tipo.push({"name": 'No Publicación', "value": datos.no_publicacion});

  return this.grafica_solicitudes_tipo;
}

agregar_datos_proyectos_clientes_usuario(datos) {
  for (var datos of datos) {
    this.grafica_proyectos_usuario_cliente.push({"name": datos.nombre, "value": datos.proyectos});
  }
  return this.grafica_proyectos_usuario_cliente;
}
agregar_datos_proyectos_clientes(datos) {
  for (var datos of datos) {
    this.grafica_proyectos_cliente.push({"name": datos.nombre, "value": datos.proyectos});
  }
  return this.grafica_proyectos_cliente;
}
agregar_datos_proyectos_usuario(datos) {
  for (var datos of datos) {
    this.grafica_proyectos_usuario.push({"name": datos.nombre, "value": datos.proyectos});
  }
  return this.grafica_proyectos_usuario;
} 
agregar_datos_proyectos_estado(datos) {
  this.grafica_proyectos_estado.push({"name": 'En Espera', "value": datos.ninguna});
  this.grafica_proyectos_estado.push({"name": 'Preliminar', "value": datos.preliminar});
  this.grafica_proyectos_estado.push({"name": 'Diagramacion', "value": datos.diagramacion});
  this.grafica_proyectos_estado.push({"name": 'Publicado', "value": datos.publicacion});
  this.grafica_proyectos_estado.push({"name": 'Finalizados', "value": datos.listos});
  
  return this.grafica_proyectos_estado;
}
agregar_datos_proyectos_tipo(datos) {
  for (var datos of datos) {
    this.grafica_proyectos_tipo.push({"name": datos.nombre, "value": datos.proyecto_count});
  }
  return this.grafica_proyectos_tipo;
}
agregar_datos_proyectos_diseñador(datos) {
  for (var datos of datos) {
    this.grafica_proyectos_disenador.push({"name": datos.nombre, "value": datos.proyectos});
  }
  return this.grafica_proyectos_disenador;
}
agregar_datos_proyectos_autor(datos) {
  for (var datos of datos) {
    this.grafica_proyectos_autor.push({"name": datos.autor, "value": datos.proyectos});
  }
  return this.grafica_proyectos_autor;
}
Contadores(formulario) {
  this.spinner.show();
    this.contador.obtener_contadores(formulario).subscribe(
        data => {
          this.spinner.hide();
          this.toastr.success('Gráficas Generadas'); 
          this.solicitudes_estado = data[0]
          this.solicitudes_usuario_cliente = data[1]
          this.solicitudes_tipo = data[2]
          this.proyectos_usuario_cliente = data[3]
          this.proyectos_generales = data[4]

          this.grafica_solicitudes_estado = [...this.agregar_datos_solicitudes_estados(this.solicitudes_estado)];
          this.grafica_solicitudes_tipo = [...this.agregar_datos_solicitudes_tipos(this.solicitudes_tipo)];
          this.grafica_solicitudes_usuario_cliente = [...this.agregar_datos_solicitudes_clientes_usuario(this.solicitudes_usuario_cliente.todas)];
          this.grafica_solicitudes_usuario = [...this.agregar_datos_solicitudes_usuarios(this.solicitudes_usuario_cliente.usuarios)];
          this.grafica_solicitudes_cliente = [...this.agregar_datos_solicitudes_clientes(this.solicitudes_usuario_cliente.clientes)];
          this.grafica_proyectos_usuario_cliente = [...this.agregar_datos_proyectos_clientes_usuario(this.proyectos_usuario_cliente.todas)];
          this.grafica_proyectos_cliente = [...this.agregar_datos_proyectos_clientes(this.proyectos_usuario_cliente.clientes)];
          this.grafica_proyectos_usuario = [...this.agregar_datos_proyectos_usuario(this.proyectos_usuario_cliente.usuarios)];
          this.grafica_proyectos_estado = [...this.agregar_datos_proyectos_estado(this.proyectos_generales)];
          this.grafica_proyectos_tipo = [...this.agregar_datos_proyectos_tipo(this.proyectos_generales.tipo)];
          this.grafica_proyectos_autor = [...this.agregar_datos_proyectos_autor(this.proyectos_generales.autor)];
          this.grafica_proyectos_disenador = [...this.agregar_datos_proyectos_diseñador(this.proyectos_generales.diseñador)];
        },
        err =>{ 
          this.spinner.hide();
          this.toastr.error('Ha ocurrido un error'); 
        }
      );
    }
    mostrar_graficas(model){
      this.grafica_solicitudes_estado = [];
      this.grafica_solicitudes_tipo = [];
      this.grafica_solicitudes_usuario_cliente = [];
      this.grafica_solicitudes_usuario = [];
      this.grafica_solicitudes_cliente = [];
      this.grafica_proyectos_usuario_cliente = [];
      this.grafica_proyectos_cliente = [];
      this.grafica_proyectos_usuario = [];
      this.grafica_proyectos_estado = [];
      this.grafica_proyectos_tipo = [];
      this.grafica_proyectos_autor= [];
      this.grafica_proyectos_disenador= [];
      this.Contadores(model);
    }

}
