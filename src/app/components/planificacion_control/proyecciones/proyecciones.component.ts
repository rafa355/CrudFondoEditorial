import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { SolicitudesService } from '../../../services/solicitudes.service'
import { ProyeccionesService } from '../../../services/proyecciones.service'
import { ModalDirective } from 'ngx-bootstrap/modal';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  green: {
    primary: '#10c469',
    secondary: '#10c469'
  }
};

@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css']
})
export class ProyeccionesComponent implements OnInit {
  @ViewChild('childModal') childModal: ModalDirective;
  modalContent: TemplateRef<any>;
  locale: string = 'es';
  public solicitudes;
  public proyecciones;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-envelope" (click)="showChildModal()" style="color:white"></i>',
      onClick: (): void => {
        this.showChildModal();
      }
    },
    {
      label: '<i class="fa fa-fw fa-times" style="color:white"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  constructor(private toastr:ToastrService,private _fb: FormBuilder,private solicitudesservice:SolicitudesService,private ProyeccionesService:ProyeccionesService,private modal: NgbModal) {}
  public myForm: FormGroup;

  ngOnInit() {
    this.myForm = this._fb.group({
      correo: [''],
      mensaje: [''],
      });
    this.ObtenerSolicitudes();
    this.ObtenerProyecciones();
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

   ObtenerProyecciones() {
    this.ProyeccionesService.obtener_proyecciones().subscribe(
      data => { this.proyecciones = data,this.addEvent(data),console.log(this.proyecciones)},
      err => {console.error(err)},      
      );}

      ObtenerSolicitudes() {
        this.solicitudesservice.obtener_solicitudes().subscribe(
          data => { this.solicitudes = data,this.addEvent(data),console.log(this.solicitudes)},
          err => {console.error(err)},      
          );}

  addEvent(fechas): void {
    for (var solicitud of fechas) {
      if(solicitud.status == "pendiente"){
          this.events.push({
            title: solicitud.nombre+' (Pendiente)',
            start: startOfDay(new Date()),
            color: colors.red,
          });
          this.refresh.next();
      }else if(solicitud.status == "activa"){
        this.events.push({
          title: solicitud.nombre,
          start: startOfDay(solicitud.created_at),
          color: colors.green,
        });
        this.refresh.next();
      }else {
        this.events.push({
          title: 'Proyeccion de solicitud '+solicitud.solicitudes.nombre,
          start: startOfDay(solicitud.fecha_entrega),
          color: colors.blue,
          actions: this.actions
        });
        this.refresh.next();
      }
    }
  }

  showChildModal(): void {
    this.childModal.show();
  }
 
  hideChildModal(): void {
    this.childModal.hide();
  }

  save(model) {
    this.enviar_mensaje(model);
  }
  enviar_mensaje(mensaje) {
    this.ProyeccionesService.enviar_mensaje(mensaje).subscribe(
       data => {
        this.hideChildModal();
        this.toastr.success('Mensaje Enviado');
      },
       error => {
         console.error("Error saving food!");
       }
    );
  }
}
