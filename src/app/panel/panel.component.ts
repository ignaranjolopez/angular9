import { Component, OnInit } from '@angular/core';
import { EjercicioService } from '../ejercicio.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  personas:Persona[];

  constructor(private ejercicioService:EjercicioService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas():void{
    this.ejercicioService.getPersonas().subscribe(personas=>this.personas=personas.slice(1,5));
  }


}
