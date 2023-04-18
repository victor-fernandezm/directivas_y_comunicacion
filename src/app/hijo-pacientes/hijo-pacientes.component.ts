import { Component, EventEmitter, Output } from '@angular/core';
import { Patient } from '../modelo/medicos';

@Component({
  selector: 'app-hijo-pacientes',
  templateUrl: './hijo-pacientes.component.html',
  styleUrls: ['./hijo-pacientes.component.css']
})
export class HijoPacientesComponent {
  @Output() patientEvent: EventEmitter<Patient> = new EventEmitter<Patient>();
  currentPatient: Patient = new Patient();

  addPatient(): void {
    this.patientEvent.emit(this.currentPatient);
    this.currentPatient = new Patient();
  }

}
