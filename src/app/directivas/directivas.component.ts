import { Component } from '@angular/core';
import { Colors } from '../modelo/colors';

type ProductRow = [string, number];

@Component({
	selector: 'app-directivas',
	templateUrl: './directivas.component.html',
	styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
	switch: boolean = false;
	headers: string[] = ["Producto", "Cantidad"];
	data: ProductRow[] = [
		["Patatas", 25],
		["Pan", 20],
		["Carne", 7],
		["Pescado", 30],
		["Macarrones", 5]
	];

	color: Colors = Colors.DEFAULT;

	actual: ProductRow = ["", 0];

	addProduct(product: ProductRow) {
		this.data.push(product);
		
	}

	enumAsArray(): string[] {
		let out: any[] = Object.values(Colors).filter((v,i,arr) => typeof v === 'string');
		return out;
	}

	deleteRow(row: number): void {
		this.data = this.data.filter((v, i, arr) => i != row);
	}

	enumerate<T>(arr: T[]): [number, T][] {
		let out: [number, T][] = [];
		for(let i = 0;i<arr.length;i++) {
			out.push([i, arr[i]] as [number, T]);
		}
		return out;
	}

	range(max: number): number[] {
		let out: number[] = [];
		for(let i = 0;i<max;i++) {
			out.push(i);
		}
		return out;
	}
}
