import { Component, OnInit,  ChangeDetectionStrategy,ViewChild,TemplateRef } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SolicitudesService } from '../../../services/solicitudes.service'

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
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css']
})
export class ProyeccionesComponent implements OnInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  locale: string = 'es';
public solicitudes;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
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

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Evento 2',
      color: colors.yellow,
      actions: this.actions
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(private solicitudesservice:SolicitudesService,private modal: NgbModal) {}

  ngOnInit() {
    this.ObtenerSolicitudes();
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
            start: startOfDay(solicitud.created_at),
            end: startOfDay(new Date()),
            color: colors.red,
            allDay: true
          });
          this.refresh.next();
      }else{
        this.events.push({
          title: solicitud.nombre,
          start: startOfDay(solicitud.created_at),
          color: colors.green,
        });
        this.refresh.next();
      }
    }
  }

}
