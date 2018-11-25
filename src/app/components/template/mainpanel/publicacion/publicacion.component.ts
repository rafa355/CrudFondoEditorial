import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  @Input() food;

  constructor() { }

  ngOnInit() {
  }

}
