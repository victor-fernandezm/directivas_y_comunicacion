import { Component } from '@angular/core';
import { Doctor } from '../modelo/medicos';

@Component({
	selector: 'app-padre-medico',
	templateUrl: './padre-medico.component.html',
	styleUrls: ['./padre-medico.component.css']
})
export class PadreMedicoComponent {
	currentDoctor: Doctor = new Doctor();
	doctors: Doctor[] = [];

	addDoctor() {
		this.doctors.push(this.currentDoctor);
		this.currentDoctor = new Doctor();
	}
}
