import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpanelComponent } from './../../components/template/mainpanel/mainpanel.component';
import { ProyectosComponent } from './../../components/proyectos/proyectos.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainpanelComponent },
  { path: 'proyectos', component: ProyectosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
