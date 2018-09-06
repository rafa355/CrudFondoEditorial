import { Component,Injectable } from '@angular/core';
@Injectable()

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent {
  url: string = 'http://back-fondo-editorial.herokuapp.com/api/';
}

