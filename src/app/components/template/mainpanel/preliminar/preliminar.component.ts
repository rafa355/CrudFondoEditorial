import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preliminar',
  templateUrl: './preliminar.component.html',
  styleUrls: ['./preliminar.component.css']
})
export class PreliminarComponent implements OnInit {
  @Input() food;

  constructor() { }

  ngOnInit() {
  }

}
