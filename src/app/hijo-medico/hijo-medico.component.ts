import { Component, Input } from '@angular/core';
import { Doctor } from '../modelo/medicos';

@Component({
	selector: 'app-hijo-medico',
	templateUrl: './hijo-medico.component.html',
	styleUrls: ['./hijo-medico.component.css']
})
export class HijoMedicoComponent {

	@Input() doctors: Doctor[] = [];

}
