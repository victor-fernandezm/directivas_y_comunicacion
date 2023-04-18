import { Component } from '@angular/core';
import { Patient } from '../modelo/medicos';

@Component({
  selector: 'app-padre-pacientes',
  templateUrl: './padre-pacientes.component.html',
  styleUrls: ['./padre-pacientes.component.css']
})
export class PadrePacientesComponent {

  patients: Patient[] = [];

  recievePatientEvent(patient: Patient): void {
    this.patients.push(patient);
  }
}
