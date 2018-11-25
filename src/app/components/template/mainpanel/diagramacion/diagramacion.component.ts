import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diagramacion',
  templateUrl: './diagramacion.component.html',
  styleUrls: ['./diagramacion.component.css']
})
export class DiagramacionComponent implements OnInit {
  @Input() food;

  constructor() { }

  ngOnInit() {
  }

}
