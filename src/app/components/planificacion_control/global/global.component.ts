import { Component,Injectable } from '@angular/core';
@Injectable()

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent {
 //url: string = 'https://back-fondo-editorial.herokuapp.com/api/';
 url: string = 'http://localhost:8000/api/';
 //url: string = 'back/api/';
}

