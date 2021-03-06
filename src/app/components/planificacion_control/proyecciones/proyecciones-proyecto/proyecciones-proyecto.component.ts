import { ProyectoService } from './../../../../services/proyecto.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
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
  selector: 'app-proyecciones-proyecto',
  templateUrl: './proyecciones-proyecto.component.html',
  styleUrls: ['./proyecciones-proyecto.component.css']
})
export class ProyeccionesProyectoComponent implements OnInit {
  @ViewChild('modalContent')
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
      label: '<i class="fa fa-fw fa-envelope"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        alert("enviado");
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  constructor(private solicitudesservice:SolicitudesService,private ProyectoService:ProyectoService,private modal: NgbModal) {}

  ngOnInit() {
    this.ObtenerProyectos();
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


      ObtenerProyectos() {
        this.ProyectoService.obtener_proyectos().subscribe(
          data => { this.solicitudes = data,this.addEvent(data),console.log(this.solicitudes)},
          err => {console.error(err)},      
          );}

  addEvent(fechas): void {
    for (var proyecto of fechas) {
        this.events.push({
          title: 'Creación - '+proyecto.nombre,
          start: startOfDay(proyecto.created_at),
          color: colors.green
        });
        this.events.push({
          title: 'Entrega estimada - '+proyecto.nombre,
          start: startOfDay(proyecto.fecha_estimada),
          color: colors.blue
        });
        this.refresh.next();
    }
  }

}
