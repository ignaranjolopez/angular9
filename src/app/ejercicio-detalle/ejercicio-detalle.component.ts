import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { ActivatedRoute } from "@angular/router";
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

  persona:Persona;

  constructor(private route:ActivatedRoute, private ejerciciosService:EjercicioService) { }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.ejerciciosService.getPersona(id).subscribe(persona=>this.persona = persona);
  }

}
