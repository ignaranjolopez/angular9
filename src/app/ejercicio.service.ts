import { Injectable } from '@angular/core';
import { Persona } from "./persona";
import { personasList } from "./collection-personas";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getPersona():Observable<Persona[]>{
    return of(personasList);
  }
}
