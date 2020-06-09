import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

  @Input() persona:Persona;

  constructor() { }

  ngOnInit(): void {
  }

}
