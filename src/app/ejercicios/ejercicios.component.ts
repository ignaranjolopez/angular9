import { Component, OnInit } from '@angular/core';
import { Persona } from "../persona";

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  title = 'Component Ejercicio';

  persona : Persona = {
    id: 1,
    nombre: 'ignacio',
    fechaNacimiento: new Date(1994, 10, 1, 23, 3, 42, 11)
  };


  constructor() { }

  ngOnInit(): void {
  }

}
