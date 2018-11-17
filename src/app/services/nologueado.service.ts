import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutenticacionService } from './autenticacion.service';

@Injectable()
export class NologueadoService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |

  Observable<boolean> | Promise<boolean>{
    return !this.autenticacion.logueado();
  }
  constructor(private autenticacion:AutenticacionService) { }
}
