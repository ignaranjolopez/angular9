import { Component, OnInit } from '@angular/core';
import { Persona } from "../persona";
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  title = 'Component Ejercicio';

  personaInicial : Persona = {
    id: 1,
    nombre: 'ignacio',
    fechaNacimiento: new Date(1994, 10, 1, 23, 3, 42, 11)
  };

  personas:Persona[];
  personaSeleccionada:Persona;


  constructor(private ejercicioService:EjercicioService) { }

  getPersonas():void{
    this.personas = this.ejercicioService.getPersona();
  }

  ngOnInit(): void {
    this.getPersonas();
  }

  selectPersona(persona:Persona):void{
    console.log("persona obtenida: " + persona.nombre);
    this.personaSeleccionada = persona;
  }

}
