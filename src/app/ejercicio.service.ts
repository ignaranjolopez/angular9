import { Injectable } from '@angular/core';
import { Persona } from "./persona";
import { personasList } from "./collection-personas";

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getPersona():Persona[]{
    return personasList;
  }
}
