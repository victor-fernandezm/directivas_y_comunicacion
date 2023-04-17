import { Component } from '@angular/core';

enum LogLevels {
	INFO,
	WARNING,
	ERROR,
	FATAL,
	DEBUG
}

// level es de tipo enum LogLevels y msg es de tipo string
type LogEntry = {'level': LogLevels, 'msg': string};

@Component({
	selector: 'app-fundamento-ts',
	templateUrl: './fundamento-ts.component.html',
	styleUrls: ['./fundamento-ts.component.css']
})
export class FundamentoTSComponent {
	nombres: string[] = ["Pedro", "Mario", "Juan", "Alejandro"];
	nombre: string = "";
	idx: number = 0;
	fnResult: any;

	// el alias para LogEntry se encuentra en la linea 12
	log_entries: LogEntry[] = [];
	logmsg: string = "";

	dayOfWeek: "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado" | "domingo" = "lunes";
	dayCheckResult: boolean = false;

	checkDayType(): void {
		this.dayCheckResult = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"].indexOf(this.dayOfWeek) != -1;
	}

	// enums
	public get log(): string {
		return this.log_entries.map((v, i, arr) => `[${LogLevels[v.level]}] ${v.msg}`).join("\n")
	}

	logInfo(): void {
		this.log_entries.push({'level': LogLevels.INFO, 'msg': this.logmsg});
		this.logmsg = "";
	}
	
	logWarning(): void {
		this.log_entries.push({'level': LogLevels.WARNING, 'msg': this.logmsg});
		this.logmsg = "";
	}
	
	logError(): void {
		this.log_entries.push({'level': LogLevels.ERROR, 'msg': this.logmsg});
		this.logmsg = "";
	}
	
	logFatal(): void {
		this.log_entries.push({'level': LogLevels.FATAL, 'msg': this.logmsg});
		this.logmsg = "";
	}
	
	logDebug(): void {
		this.log_entries.push({'level': LogLevels.DEBUG, 'msg': this.logmsg});
		this.logmsg = "";
	}

	// arrays
	setFnResult(res: unknown): void {
		this.fnResult = res;
	}

	addElement(elem: string): void {
		this.nombres.push(elem);
	}

	delElement(elem: string): void {
		// filtras el array seleccionando solo aquellos elementos cuyo valor no sea elem
		this.nombres = this.nombres.filter((v, i, arr) => v != elem);
	}

	delElementAt(pos: number): void {
		// filtras el array seleccionando solo aquellos elementos cuyo indice no sea pos
		this.nombres = this.nombres.filter((v, i, arr) => i != pos);
	}

	getIndexOf(elem: string): number {
		return this.nombres.indexOf(elem);
	}

	getElementAt(pos: number): string {
		return this.nombres[pos];
	}

	sortArray(): void {
		this.nombres.sort();
	}

	// he tenido que hacer esto por que si no el template en el html no actualiza el valor
	// si solo pusiera {{nombre}} en el html no funcionaria
	public nombresString(): string {
		return this.nombres.toString();
	}
}
