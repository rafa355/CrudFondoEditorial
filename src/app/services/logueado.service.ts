import { AutenticacionService } from './autenticacion.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LogueadoService implements CanActivate{

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |

  Observable<boolean> | Promise<boolean>{
    if (this.autenticacion.logueado()) {
      return true;
    } else {
      this.router.navigate(['/inicio_sesion'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }

  }
  constructor(private autenticacion:AutenticacionService,private router:Router) { }
}
