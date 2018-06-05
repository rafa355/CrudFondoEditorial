import { Injectable,OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto'
import {Observable} from 'rxjs';
 //http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProyectoService  {

  constructor(private http:HttpClient) {}
 
  // Uses http.get() to load data from a single API endpoint
  getFoods() {
      return this.http.get('http://localhost:8000/api/ObtenetProyectos');
  }
}
